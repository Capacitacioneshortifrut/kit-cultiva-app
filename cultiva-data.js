/* ============================================================
   CULTIVA DATA · capa de datos de ESCALADAS (DEMO ↔ Supabase)
   - Demo: window.ESCALADAS_DEMO + localStorage (idéntico a antes,
     incluida la respuesta simulada del subordinado).
   - Supabase: tabla `escaladas` (RLS por parte) + `escalada_mensajes`
     (hilo de ida y vuelta) + Edge Function `escalar` (enrutamiento
     al jefe directo). Una escalada creada por un subordinado le
     aparece a su jefe en otro dispositivo.
   Nota: los `registros` siguen en localStorage en esta fase; el
   botón "Escalar" de un registro sí crea una escalada real.
   Expone window.CultivaData (API basada en Promesas).
   ============================================================ */
(function () {
  var A = window.CultivaAuth;
  var FN = (window.CULTIVA_CONFIG && window.CULTIVA_CONFIG.escalarFunction) || "escalar";
  function isSb() { return !!(A && A.mode && A.mode() === "supabase"); }
  function client() { return A.client(); }

  var _me = null;
  function me() {
    if (!isSb()) return Promise.resolve(null);
    if (_me) return Promise.resolve(_me);
    return client().auth.getUser().then(function (r) {
      _me = ((r.data && r.data.user && r.data.user.email) || "").split("@")[0];
      return _me;
    });
  }

  /* Modo admin: cuando quien está conectado es administrador, todo registro
     que haga (mientras navega los rituales) queda señalado con _admin:true.
     El legajo ya lo pega la base de datos (default current_legajo()). */
  var _adminMode = false;
  function markVals(v) { v = v || {}; return _adminMode ? Object.assign({}, v, { _admin: true }) : v; }

  // ---------------- DEMO (localStorage) ----------------
  function dKey(pid) { return "cultiva3:escbox:" + pid; }
  function dRead(pid) { try { var r = localStorage.getItem(dKey(pid)); return r ? JSON.parse(r) : {}; } catch (e) { return {}; } }
  function dWrite(pid, st) { try { localStorage.setItem(dKey(pid), JSON.stringify(st)); } catch (e) {} }
  function lite(t) { return t.length > 60 ? t.slice(0, 57) + "…" : t.toLowerCase(); }

  // ---------------- REGISTROS (historial por ritual) ----------------
  function rKey(perfil, ritualId) { return "cultiva3:" + perfil + ":" + ritualId; }
  function rRead(perfil, ritualId) { try { var r = localStorage.getItem(rKey(perfil, ritualId)); return r ? JSON.parse(r) : []; } catch (e) { return []; } }
  function rWrite(perfil, ritualId, arr) { try { localStorage.setItem(rKey(perfil, ritualId), JSON.stringify(arr)); } catch (e) {} }
  function rowToEntry(r) {
    return { ts: Date.parse(r.created_at), id: r.id, escalado: !!r.escalado,
             vals: r.vals || {}, followTs: r.follow_ts ? Date.parse(r.follow_ts) : undefined };
  }

  // ---------------- API ----------------
  var Data = {
    mode: function () { return isSb() ? "supabase" : "demo"; },
    me: me,

    /* historial de un ritual (más reciente primero).
       Se filtra SOLO por ritual_id: la RLS ya acota a los registros del
       propio usuario (legajo = current_legajo()). NO se filtra por `perfil`
       a propósito — si el perfil del usuario en el padrón cambió después de
       registrar (p. ej. pack-n4 → pack-n4-cl), filtrar por perfil ocultaría
       sus registros anteriores aunque son suyos. */
    listRegistros: function (perfil, ritualId) {
      if (!isSb()) return Promise.resolve(rRead(perfil, ritualId));
      return client().from("registros").select("*")
        .eq("ritual_id", ritualId)
        .order("created_at", { ascending: false }).then(function (q) {
          return (q.data || []).map(rowToEntry);
        });
    },

    /* estado de las escaladas que YO levanté, indexado por registro_id.
       Permite mostrarle a quien levantó un tema si su líder ya lo resolvió
       (visibilidad "del lado del que la hizo"). RLS: from_legajo = yo. */
    misEscaladasPorRegistro: function () {
      if (!isSb()) return Promise.resolve({});
      return me().then(function (legajo) {
        return client().from("escaladas")
          .select("registro_id,status,updated_at")
          .eq("from_legajo", legajo).then(function (q) {
            var map = {};
            (q.data || []).forEach(function (r) {
              if (r.registro_id) map[r.registro_id] = { status: r.status, ts: Date.parse(r.updated_at) };
            });
            return map;
          });
      }).catch(function () { return {}; });
    },

    /* guarda un registro nuevo; devuelve la entrada persistida (con id/ts). */
    saveRegistro: function (perfil, ritualId, entry) {
      var e = Object.assign({}, entry, { vals: markVals(entry.vals) });
      if (!isSb()) {
        var arr = [e].concat(rRead(perfil, ritualId)).slice(0, 500);
        rWrite(perfil, ritualId, arr); return Promise.resolve(e);
      }
      return client().from("registros")
        .insert({ perfil: perfil, ritual_id: ritualId, vals: e.vals, escalado: false })
        .select().single().then(function (q) {
          return q.data ? rowToEntry(q.data) : e;
        });
    },

    /* marca un registro como escalado. */
    setRegistroEscalado: function (perfil, ritualId, entry) {
      if (!isSb()) {
        var arr = rRead(perfil, ritualId).map(function (e) { return e.ts === entry.ts ? Object.assign({}, e, { escalado: true }) : e; });
        rWrite(perfil, ritualId, arr); return Promise.resolve();
      }
      return client().from("registros").update({ escalado: true }).eq("id", entry.id).then(function () {});
    },

    /* guarda el seguimiento (acuerdo/comentarios) de un registro. */
    updateRegistroFollow: function (perfil, ritualId, entry, newVals) {
      if (!isSb()) {
        var arr = rRead(perfil, ritualId).map(function (e) {
          return e.ts === entry.ts ? Object.assign({}, e, { vals: newVals, followTs: Date.now() }) : e;
        });
        rWrite(perfil, ritualId, arr); return Promise.resolve(Date.now());
      }
      return client().from("registros").update({ vals: newVals, follow_ts: new Date().toISOString() })
        .eq("id", entry.id).then(function () { return Date.now(); });
    },

    /* ---- PUNTOS (semanal) ---- */
    /* inicio de la semana (lunes 00:00) en ms */
    weekStartTs: function () {
      var d = new Date(); var off = (d.getDay() + 6) % 7; // lunes = 0
      d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - off); return d.getTime();
    },
    /* todos los registros del perfil (todos los rituales) como [{ritual_id, ts}] */
    listRegistrosPerfil: function (perfil) {
      if (!isSb()) {
        var out = []; var pref = "cultiva3:" + perfil + ":";
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(pref) === 0) {
              var rid = k.slice(pref.length);
              (JSON.parse(localStorage.getItem(k) || "[]") || []).forEach(function (e) {
                out.push({ ritual_id: rid, ts: e.ts });
              });
            }
          }
        } catch (e) {}
        return Promise.resolve(out);
      }
      return client().from("registros").select("ritual_id,created_at").eq("perfil", perfil)
        .then(function (q) {
          return (q.data || []).map(function (r) { return { ritual_id: r.ritual_id, ts: Date.parse(r.created_at) }; });
        });
    },
    /* puntos = por cada ritual con ≥1 registro en la semana: 10 + 3×(extras) */
    puntosDe: function (registros, desde) {
      var byR = {};
      (registros || []).forEach(function (r) { if (r.ts >= desde) byR[r.ritual_id] = (byR[r.ritual_id] || 0) + 1; });
      var total = 0; Object.keys(byR).forEach(function (k) { total += 10 + 3 * (byR[k] - 1); });
      return total;
    },
    /* marca un ritual como "aplicado" (rituales sin formulario). Idempotente por día. */
    registrarHecho: function (perfil, ritualId) {
      var day = new Date(); day.setHours(0, 0, 0, 0); var dayStart = day.getTime();
      if (!isSb()) {
        var arr = rRead(perfil, ritualId);
        if (!arr.some(function (e) { return e.ts >= dayStart; })) {
          rWrite(perfil, ritualId, [{ ts: Date.now(), hecho: true, vals: markVals({}) }].concat(arr).slice(0, 60));
        }
        return Promise.resolve();
      }
      return client().from("registros").select("id").eq("perfil", perfil).eq("ritual_id", ritualId)
        .gte("created_at", new Date(dayStart).toISOString()).limit(1).then(function (q) {
          if (q.data && q.data.length) return;
          return client().from("registros").insert({ perfil: perfil, ritual_id: ritualId, vals: markVals({ _hecho: true }), escalado: false }).then(function () {});
        });
    },

    /* ---- MI EQUIPO (por jerarquía) ---- */
    /* Reportes directos del usuario conectado (para el desplegable de
       Reconocimiento). Demo: se derivan por regla del padrón (misma gerencia,
       un nivel por debajo). Supabase: se consultan por legajo_jefe (RLS por
       jerarquía). Devuelve [{ legajo, nombre }]. */
    reportesDirectos: function (user) {
      user = user || {};
      if (!isSb()) {
        // Demo: N1/N2/N3 ven a TODA la gente de su área registrada en el padrón;
        // N4 (y otros) no ven a nadie. En producción manda la jerarquía real (legajo_jefe).
        if (["N1", "N2", "N3"].indexOf(user.nivel) < 0) return Promise.resolve([]);
        var list = (window.USUARIOS || []).filter(function (u) {
          return !u.es_admin && u.gerencia === user.gerencia && u.legajo !== user.legajo;
        }).map(function (u) { return { legajo: u.legajo, nombre: u.nombre }; });
        return Promise.resolve(list);
      }
      var legajo = user.legajo || _me;
      return client().from("usuarios").select("legajo,nombre,nombre_corto")
        .eq("legajo_jefe", legajo).order("nombre")
        .then(function (q) {
          if (q.error) throw q.error;
          return (q.data || []).map(function (u) { return { legajo: u.legajo, nombre: u.nombre }; });
        });
    },

    /* puntos de la semana de todo el equipo hacia abajo. */
    equipoPuntos: function (perfil) {
      if (!isSb()) return Promise.resolve([
        { legajo: "demo1", nombre: "Ana Torres", cargo: "—", nivel: "N4", perfil: perfil, puntos: 64 },
        { legajo: "demo2", nombre: "Luis Ramos", cargo: "—", nivel: "N4", perfil: perfil, puntos: 38 },
        { legajo: "demo3", nombre: "Marta Ríos", cargo: "—", nivel: "N4", perfil: perfil, puntos: 92 },
      ]);
      return client().rpc("equipo_puntos").then(function (q) { if (q.error) throw q.error; return q.data || []; });
    },
    /* escaladas levantadas por todo el equipo hacia abajo. */
    equipoEscaladas: function (perfil) {
      if (!isSb()) return Promise.resolve([
        { id: "d1", from_nombre: "Ana Torres", nivel: "N4", tema: "Falta de agua",
          detalle: "Sin agua para consumo en el sector desde temprano.", status: "pendiente", created_at: new Date().toISOString() },
        { id: "d2", from_nombre: "Marta Ríos", nivel: "N4", tema: "Reconocimiento al esfuerzo",
          detalle: "El equipo siente que su esfuerzo no se ve.", status: "proceso", created_at: new Date(Date.now() - 86400000).toISOString() },
      ]);
      return client().rpc("equipo_escaladas").then(function (q) { if (q.error) throw q.error; return q.data || []; });
    },
    /* escaladas que RECIBE el equipo (to_legajo) y cómo las gestiona (estado).
       Vista supervisora: por cada miembro del equipo, los temas que le llegaron. */
    equipoGestionEscaladas: function (perfil) {
      if (!isSb()) return Promise.resolve([
        { id: "m1", to_legajo: "demo-a", gestor_nombre: "Luis Ramos", gestor_nivel: "N3",
          from_nombre: "Ana Torres", tema: "Falta de agua",
          detalle: "Sin agua para consumo en el sector.", status: "resuelvo", created_at: new Date().toISOString() },
        { id: "m2", to_legajo: "demo-a", gestor_nombre: "Luis Ramos", gestor_nivel: "N3",
          from_nombre: "Pedro Ruiz", tema: "Turno nocturno",
          detalle: "Confusión con el rol del turno.", status: "proceso", created_at: new Date().toISOString() },
        { id: "m3", to_legajo: "demo-b", gestor_nombre: "Marta Ríos", gestor_nivel: "N3",
          from_nombre: "Sara Díaz", tema: "Reconocimiento al esfuerzo",
          detalle: "El equipo siente que su esfuerzo no se ve.", status: "pendiente", created_at: new Date().toISOString() },
      ]);
      return client().rpc("equipo_gestion_escaladas").then(function (q) { if (q.error) throw q.error; return q.data || []; });
    },

    /* ---- MODO MAESTRO ---- */
    /* Resuelve un legajo → { found, nombre, perfil, area, nivel, registros[] }.
       El maestro no inicia sesión: en Supabase usa la RPC maestro_colaborador
       (SECURITY DEFINER). En demo, el padrón local + registros de localStorage. */
    maestroColaborador: function (legajo) {
      legajo = String(legajo || "").trim();
      if (!legajo) return Promise.resolve({ found: false });
      if (!isSb()) {
        var u = window.findUsuario ? window.findUsuario(legajo) : null;
        if (!u || !u.perfil) return Promise.resolve({ found: false });
        var regs = []; var pref = "cultiva3:" + u.perfil + ":";
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(pref) === 0) {
              var rid = k.slice(pref.length);
              (JSON.parse(localStorage.getItem(k) || "[]") || []).forEach(function (e) {
                if (!e.hecho || (e.vals && Object.keys(e.vals).length)) regs.push({ ritual_id: rid, ts: e.ts, vals: e.vals || {} });
              });
            }
          }
        } catch (e) {}
        return Promise.resolve({ found: true, legajo: u.legajo, nombre: u.nombre, perfil: u.perfil, area: u.area || "", nivel: u.nivel || "", registros: regs });
      }
      return client().rpc("maestro_colaborador", { p_legajo: legajo }).then(function (q) {
        if (q.error) throw q.error;
        var d = q.data; if (!d) return { found: false };
        var regs = (d.registros || []).map(function (r) { return { ritual_id: r.ritual_id, ts: Date.parse(r.created_at), vals: r.vals || {} }; });
        return { found: true, legajo: d.legajo || legajo, nombre: d.nombre, perfil: d.perfil, area: d.area || "", nivel: d.nivel || "", registros: regs };
      });
    },

    /* ---- DASHBOARD (admin) · resumen del piloto, con filtros ----
       filtros = { area, nivel, periodo }. En Supabase lo calcula la RPC
       dash_resumen(p_area, p_nivel, p_periodo) (SECURITY DEFINER, solo es_admin).
       En demo, computa desde un dataset sintético determinista para que los
       filtros funcionen de verdad y se vea el layout. */
    dashResumen: function (filtros) {
      filtros = filtros || {};
      var fArea = filtros.area || null, fNiv = filtros.nivel || null, per = filtros.periodo || "semana";
      if (!isSb()) {
        // dataset sintético determinista (sin Math.random, para que no cambie al recargar)
        var AREAS = ["cosecha", "produccion", "packing", "calidad"];
        var NIVELES = { cosecha: ["N1", "N2", "N3", "N4"], produccion: ["N1", "N2", "N3", "N4"], packing: ["N1", "N2", "N3", "N4"], calidad: ["N2", "N3", "N4", "TAC"] };
        var RITS = ["Acompañamiento 1 a 1", "Espacio de confianza", "Reconocimiento", "Reconocimiento Sincero", "Revisión de escaladas"];
        var NOMS = ["Ana Torres", "Luis Ramos", "Marta Ríos", "Pedro Ruiz", "Sara Díaz", "Jorge León", "Elena Vega", "Raúl Pinto", "Nadia Cruz", "Iván Soto", "Rosa Melo", "Hugo Paz", "Lía Fuentes", "Omar Ríos"];
        var mult = per === "acumulado" ? 8 : (per === "mes" ? 4 : 1);
        var seed = 20260720, people = [];
        function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
        AREAS.forEach(function (a) {
          NIVELES[a].forEach(function (n) {
            var cnt = 2 + Math.floor(rnd() * 4);
            for (var i = 0; i < cnt; i++) {
              var activo = rnd() > 0.33;
              people.push({ area: a, nivel: n, nombre: NOMS[Math.floor(rnd() * NOMS.length)],
                activo: activo, marcas: activo ? (1 + Math.floor(rnd() * 4)) * mult : 0,
                ritual: RITS[Math.floor(rnd() * RITS.length)], pts: activo ? Math.floor((10 + rnd() * 90)) * (mult >= 4 ? 1 : 1) : 0 });
            }
          });
        });
        var sel = people.filter(function (p) { return (!fArea || p.area === fArea) && (!fNiv || p.nivel === fNiv); });
        // participación por área
        var byArea = {};
        sel.forEach(function (p) { var b = byArea[p.area] || (byArea[p.area] = { area: p.area, lideres: 0, activos: 0 }); b.lideres++; if (p.activo) b.activos++; });
        // rituales
        var byRit = {};
        sel.forEach(function (p) { if (p.marcas > 0) byRit[p.ritual] = (byRit[p.ritual] || 0) + p.marcas; });
        // ranking
        var ranking = sel.filter(function (p) { return p.pts > 0; })
          .map(function (p) { return { nombre: p.nombre, area: p.area, nivel: p.nivel, puntos: Math.min(100, p.pts) }; })
          .sort(function (a, b) { return b.puntos - a.puntos; }).slice(0, 15);
        // escaladas (proporcional a activos del filtro)
        var act = sel.filter(function (p) { return p.activo; }).length;
        var eTot = act * (per === "acumulado" ? 3 : (per === "mes" ? 2 : 1));
        var esc = { pendientes: Math.round(eTot * 0.22), proceso: Math.round(eTot * 0.15), resueltas: Math.round(eTot * 0.55), vencidas: Math.round(eTot * 0.08) };
        esc.total = esc.pendientes + esc.proceso + esc.resueltas + esc.vencidas;
        return Promise.resolve({
          participacion: Object.keys(byArea).map(function (k) { return byArea[k]; }),
          rituales: Object.keys(byRit).map(function (k) { return { ritual: k, n: byRit[k] }; }),
          puntos: ranking,
          escaladas: esc,
          total_registros: sel.reduce(function (a, p) { return a + p.marcas; }, 0),
        });
      }
      return client().rpc("dash_resumen", { p_area: fArea, p_nivel: fNiv, p_periodo: per })
        .then(function (q) { if (q.error) throw q.error; return q.data || {}; });
    },

    /* ---- DASHBOARD · quién usa Reconocimiento Sincero ---- */
    /* [{legajo, nombre, cargo, area, nivel, n, ultimo}] ; mismos filtros que dashResumen.
       Si la función SQL aún no se creó en Supabase → rechaza con {missing:true}. */
    dashReconocimiento: function (filtros) {
      filtros = filtros || {};
      var fArea = filtros.area || null, fNiv = filtros.nivel || null, per = filtros.periodo || "semana";
      if (!isSb()) {
        var AREAS = ["cosecha", "produccion", "packing", "calidad"];
        var NIVELES = { cosecha: ["N1", "N2", "N3", "N4"], produccion: ["N1", "N2", "N3", "N4"], packing: ["N1", "N2", "N3", "N4"], calidad: ["N2", "N3", "N4", "TAC"] };
        var NOMS = ["Ana Torres", "Luis Ramos", "Marta Ríos", "Pedro Ruiz", "Sara Díaz", "Jorge León", "Elena Vega", "Raúl Pinto", "Nadia Cruz", "Iván Soto", "Rosa Melo", "Hugo Paz", "Lía Fuentes", "Omar Ríos"];
        var mult = per === "acumulado" ? 6 : (per === "mes" ? 3 : 1);
        var seed = 20260924, out = [], k = 0;
        function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
        AREAS.forEach(function (a) {
          NIVELES[a].forEach(function (nv) {
            var cnt = 2 + Math.floor(rnd() * 3);
            for (var i = 0; i < cnt; i++) {
              var usa = rnd() > 0.4, n = usa ? (1 + Math.floor(rnd() * 3)) * mult : 0;
              out.push({ legajo: "demo" + (k++), nombre: NOMS[Math.floor(rnd() * NOMS.length)], cargo: null, area: a, nivel: nv,
                n: n, ultimo: n ? new Date(Date.now() - Math.floor(rnd() * 6 * mult) * 86400000 - Math.floor(rnd() * 36000000)).toISOString() : null });
            }
          });
        });
        out = out.filter(function (p) { return (!fArea || p.area === fArea) && (!fNiv || p.nivel === fNiv); })
          .sort(function (a, b) { return (b.n - a.n) || String(b.ultimo || "").localeCompare(String(a.ultimo || "")); });
        return Promise.resolve(out);
      }
      return client().rpc("dash_reconocimiento", { p_area: fArea, p_nivel: fNiv, p_periodo: per })
        .then(function (q) {
          if (q.error) {
            var m = (q.error.message || "") + " " + (q.error.code || "");
            if (/dash_reconocimiento|PGRST202|42883|does not exist|Could not find/i.test(m)) throw { missing: true };
            throw q.error;
          }
          return q.data || [];
        });
    },

    /* ---- SEGUIMIENTOS DE HOY (fecha propia + escaladas por vencer) ---- */
    /* {propios: [{ritual_id, vals}], porResolver: n, enviadasPendientes: n} */
    seguimientosHoy: function (perfil) {
      var hoy = new Date().toISOString().slice(0, 10);
      if (!isSb()) {
        var out = []; var pref = "cultiva3:" + perfil + ":";
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(pref) === 0) {
              var rid = k.slice(pref.length);
              (JSON.parse(localStorage.getItem(k) || "[]") || []).forEach(function (e) {
                if (e.vals && e.vals.fecha === hoy) out.push({ ritual_id: rid, vals: e.vals });
              });
            }
          }
        } catch (e) {}
        return Promise.resolve({ propios: out, porResolver: 0, enviadasPendientes: 0 });
      }
      return me().then(function (legajo) {
        var finHoy = new Date(hoy + "T23:59:59.999").toISOString();
        return Promise.all([
          client().from("registros").select("ritual_id,vals").eq("perfil", perfil),
          client().from("escaladas").select("id").eq("to_legajo", legajo).in("status", ["pendiente", "proceso"]).lte("plazo", finHoy),
          client().from("escaladas").select("id").eq("from_legajo", legajo).in("status", ["pendiente", "proceso"]).lte("plazo", finHoy),
        ]).then(function (r) {
          var propios = (r[0].data || [])
            .filter(function (row) { return row.vals && row.vals.fecha === hoy; })
            .map(function (row) { return { ritual_id: row.ritual_id, vals: row.vals }; });
          return { propios: propios, porResolver: (r[1].data || []).length, enviadasPendientes: (r[2].data || []).length };
        });
      });
    },

    /* inbox: lo que me escalaron. Devuelve [{item, state}]. */
    listInbox: function (pid) {
      if (!isSb()) {
        var items = window.ESCALADAS_DEMO[pid] || [];
        var st = dRead(pid);
        return Promise.resolve(items.map(function (it) { return { item: it, state: st[it.id] || {} }; }));
      }
      return me().then(function (legajo) {
        return client().from("escaladas").select("*").eq("to_legajo", legajo)
          .order("created_at", { ascending: false }).then(function (q) {
            var rows = (q.data || []);
            var ids = rows.map(function (r) { return r.id; });
            var byEsc = {};
            var p = ids.length
              ? client().from("escalada_mensajes").select("*").in("escalada_id", ids)
                  .order("created_at", { ascending: true }).then(function (m) {
                    (m.data || []).forEach(function (x) { (byEsc[x.escalada_id] = byEsc[x.escalada_id] || []).push(x); });
                  })
              : Promise.resolve();
            return p.then(function () {
              return rows.map(function (r) {
                var thread = (byEsc[r.id] || []).map(function (x) {
                  return { who: x.autor_legajo === legajo ? "me" : "them", kind: x.kind, text: x.texto, ts: Date.parse(x.created_at) };
                });
                return {
                  item: { id: r.id, from: r.from_nombre, role: r.from_cargo, tema: r.tema, detalle: r.detalle, requiere: r.requiere, date: Date.parse(r.created_at) },
                  state: { status: r.status === "pendiente" ? null : r.status, thread: thread, reqSuperior: r.req_superior || "", escalatedUp: r.escalated_up },
                };
              });
            });
          });
      });
    },

    /* cambia el estado (resuelvo/proceso/derivo/escalo o null). */
    setStatus: function (pid, id, status) {
      if (!isSb()) { var st = dRead(pid); st[id] = Object.assign({}, st[id], { status: status }); dWrite(pid, st); return Promise.resolve(); }
      return client().from("escaladas").update({ status: status || "pendiente" }).eq("id", id).then(function () {});
    },

    /* agrega nota/consulta al hilo (demo simula la respuesta). */
    addMensaje: function (pid, id, kind, text) {
      if (!isSb()) {
        var st = dRead(pid); var cur = st[id] || {};
        var thread = (cur.thread || []).concat([{ who: "me", kind: kind, text: text, ts: Date.now() }]);
        if (kind === "consulta") thread = thread.concat([{ who: "them", kind: "respuesta", text: "Gracias, lo aclaro: " + lite(text), ts: Date.now() + 1 }]);
        st[id] = Object.assign({}, cur, { thread: thread }); dWrite(pid, st); return Promise.resolve();
      }
      return client().from("escalada_mensajes").insert({ escalada_id: id, kind: kind, texto: text }).then(function () {});
    },

    /* el jefe sube el tema a SU jefe (Edge Function). */
    escalateUp: function (pid, id, reqSuperior) {
      if (!isSb()) { var st = dRead(pid); st[id] = Object.assign({}, st[id], { status: "escalo", escalatedUp: true, reqSuperior: reqSuperior }); dWrite(pid, st); return Promise.resolve(); }
      return client().functions.invoke(FN, { body: { action: "subir", escalada_id: id, req_superior: reqSuperior } })
        .then(function (r) { if (r.error) throw r.error; return r.data; });
    },

    /* crea una escalada nueva (puente desde un registro / ritual de escucha).
       Demo: no enruta (el form solo marca el flag local). */
    crearEscalada: function (payload) {
      if (!isSb()) return Promise.resolve({ demo: true });
      return client().functions.invoke(FN, { body: Object.assign({ action: "crear" }, payload) })
        .then(function (r) { if (r.error) throw r.error; return r.data; });
    },

    /* sube un tema registrado a TODA la cadena de jefes (una copia por jefe).
       Se usa automáticamente al guardar en los rituales de escucha del front-line.
       Demo: no hace nada (la cadena vive en Supabase). */
    broadcastChain: function (payload) {
      if (!isSb()) return Promise.resolve({ demo: true });
      return client().functions.invoke(FN, { body: Object.assign({ action: "broadcast" }, payload) })
        .then(function (r) { if (r.error) throw r.error; return r.data; });
    },
  };

  /* el app llama a esto tras login/restore: true si el usuario es admin */
  Data.setAdmin = function (v) { _adminMode = !!v; };

  window.CultivaData = Data;
})();
