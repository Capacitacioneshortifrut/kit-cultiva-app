/* ============================================================
   REGISTRO FORM · campos dinámicos por ritual
   Cambios v5.1:
   - tipo "tema": desplegable agrupado (Operativos/Culturales) + Otros (texto)
   - alerta especial al elegir un tema marcado (p.ej. Paralizaciones)
   - botón «Escalar» ya NO está antes de guardar; aparece bajo cada
     registro guardado (en el historial)
   - guarda HISTORIAL por ritual en localStorage
   - DOS FASES (feedback/coaching): los campos de cierre (acuerdo,
     comentarios, acordamos, reconocimiento, fecha de seguimiento) NO
     van en el formulario inicial; se completan DENTRO del registro
     guardado, después de la conversación. Se puede forzar por campo
     con "defer": true en la data.
   ============================================================ */
const { createElement: rh, useState: rUse, useEffect: rEff } = React;
const RI = (name, cls) => rh("i", { "data-lucide": name, className: cls || "" });
const RT = (k) => (window.t ? window.t(k) : k);   // interfaz (UI) traducida
/* check en SVG (NO Lucide): React lo controla y puede quitarlo sin el crash de
   removeChild que ocurría al resetear el toggle "Sí/No" tras guardar. */
const CheckIco = (cls) => rh("svg", { className: cls || "", viewBox: "0 0 24 24",
  width: "1em", height: "1em", fill: "none", stroke: "currentColor",
  strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
  rh("polyline", { points: "20 6 9 17 4 12" }));

/* campos que se completan DESPUÉS de guardar, en rituales de feedback/coaching.
   Nota: "fecha"/"seguimiento" salieron de esta lista para que la "Fecha de
   seguimiento" se pueda elegir directamente en el formulario (dispara la
   notificación del día pactado). */
const DEFER_KEYS = ["acuerdo", "acuerdos", "comentarios", "comentario", "coment", "acordamos", "ajusto", "reconocimiento", "reconozco"];

function emptyValues(fields) {
  const v = {};
  fields.forEach((f) => { v[f.k] = (f.t === "bool") ? (f.def === true) : ""; });
  return v;
}

/* Campo "¿Lo resuelvo yo?" que se inyecta en el ritual "Espacio de confianza"
   (todos los perfiles). Default "Sí": no escala salvo que el líder marque "No". */
const RESUELVO_FIELD = { k: "resuelvoYo", l: RT("form.resolveToggle"), t: "bool", def: true };
function isEspacioConfianza(ritual) {
  // el ritual de escucha se llamó "Espacio de confianza" y ahora "Espacio de Escucha";
  // aceptamos ambos para conservar el toggle "¿Lo resuelvo yo?" y la escalada.
  return /espacio de (confianza|escucha)/i.test((ritual && ritual.title) || "");
}

/* etiqueta del estado de una escalada que YO levanté, para mostrarle al autor
   si su líder ya la resolvió (visibilidad "del lado del que la hizo"). */
const ESC_ST = {
  pendiente: { t: RT("escst.pendiente"), c: "#8A5A12", ico: "clock" },
  proceso:   { t: RT("escst.proceso"), c: "#8A5A12", ico: "loader" },
  resuelvo:  { t: RT("escst.resuelvo"), c: "#2F7A44", ico: "check-check" },
  derivo:    { t: RT("escst.derivo"), c: "#8A5A12", ico: "corner-up-right" },
  escalo:    { t: RT("escst.escalo"), c: "#8A5A12", ico: "arrow-up" },
};

/* devuelve {label, alerta} del tema elegido */
function temaInfo(val) {
  if (!val) return null;
  for (const g of window.TEMAS.grupos) {
    for (const it of g.items) {
      if (it.id === val) return it;
    }
  }
  return null;
}

function CultivaRegistroForm({ ritual, profileId, user, escalateTo }) {
  const reg = ritual.registro;
  const espacioConfianza = isEspacioConfianza(ritual);
  const baseFields = reg.fields || [];
  // "Espacio de confianza": añadimos el toggle "¿Lo resuelvo yo?" si no existe ya
  const fields = (espacioConfianza && !baseFields.some((f) => f.k === "resuelvoYo"))
    ? baseFields.concat([RESUELVO_FIELD])
    : baseFields;
  const storeKey = "cultiva3:" + profileId + ":" + ritual.id;

  // ¿este ritual usa campos diferidos? (feedback / coaching, o defer explícito)
  const isFC = /feedback|coaching/.test(ritual.id || "");
  function isDefer(f) { return (f.defer != null) ? !!f.defer : (isFC && DEFER_KEYS.indexOf(f.k) >= 0); }
  const formFields = fields.filter((f) => !isDefer(f));
  const deferFields = fields.filter(isDefer);

  const [vals, setVals] = rUse(() => emptyValues(formFields));
  const [temaOtro, setTemaOtro] = rUse("");
  const [history, setHistory] = rUse([]);
  const [errs, setErrs] = rUse({});
  const [justSent, setJustSent] = rUse(null);
  const [open, setOpen] = rUse(false);   // historial plegado: se abre con el botón "Historial"
  const [histPer, setHistPer] = rUse("mes");        // periodo visible del historial: "mes" | "anio"
  const [escaladoIds, setEscaladoIds] = rUse({}); // ts -> true
  const [drafts, setDrafts] = rUse({});           // ts -> { campoDiferido: valor }
  const [savedFollow, setSavedFollow] = rUse({});  // ts -> true (acaba de guardar seguimiento)
  const [escStatus, setEscStatus] = rUse({});      // registro_id -> { status } (escaladas que levanté)
  const [reportes, setReportes] = rUse([]);        // reportes directos (para campo "reportes")
  const [reportesLoaded, setReportesLoaded] = rUse(false);
  const [repQuery, setRepQuery] = rUse("");         // texto escrito en el buscador
  const [repOpen, setRepOpen] = rUse(false);        // lista desplegada
  function normTxt(x) { return (x || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  // ¿hay un campo de tipo "reportes" (desplegable de reportes directos)?
  const needsReportes = (reg.fields || []).some((f) => f.t === "reportes");
  rEff(() => {
    if (!needsReportes || !window.CultivaData.reportesDirectos) { setReportesLoaded(true); return; }
    let alive = true; setReportesLoaded(false);
    window.CultivaData.reportesDirectos(user)
      .then((list) => { if (alive) { setReportes(list || []); setReportesLoaded(true); } })
      .catch(() => { if (alive) { setReportes([]); setReportesLoaded(true); } });
    return () => { alive = false; };
  }, [needsReportes, user && user.legajo]);

  function seedDrafts(h) {
    const d = {};
    h.forEach((e) => {
      const row = {};
      deferFields.forEach((f) => { row[f.k] = e.vals[f.k] || ""; });
      d[e.ts] = row;
    });
    return d;
  }

  rEff(() => {
    setVals(emptyValues(formFields));
    setTemaOtro(""); setErrs({}); setJustSent(null); setOpen(false); setSavedFollow({});
    setRepQuery(""); setRepOpen(false);
    setHistory([]); setEscaladoIds({}); setDrafts({}); setEscStatus({});
    let alive = true;
    window.CultivaData.listRegistros(profileId, ritual.id).then((h) => {
      if (!alive) return;
      setHistory(h);
      const esc = {}; h.forEach((e) => { if (e.escalado) esc[e.ts] = true; });
      setEscaladoIds(esc);
      setDrafts(seedDrafts(h));
    }).catch(() => {});
    // estado de resolución de las escaladas que YO levanté (por registro_id)
    if (window.CultivaData.misEscaladasPorRegistro) {
      window.CultivaData.misEscaladasPorRegistro()
        .then((m) => { if (alive) setEscStatus(m || {}); })
        .catch(() => {});
    }
    return () => { alive = false; };
  }, [storeKey]);

  rEff(() => { if (window.lucide) window.lucide.createIcons(); });

  function setField(k, val) {
    setVals((p) => Object.assign({}, p, { [k]: val }));
    if (errs[k]) setErrs((p) => { const n = Object.assign({}, p); delete n[k]; return n; });
  }
  function validate() {
    const e = {};
    formFields.forEach((f) => {
      if (!f.req) return;
      const v = vals[f.k];
      if (f.t === "bool") { return; }
      if (v === "" || v == null) e[f.k] = true;
      if (f.t === "tema" && v === "__otro" && !temaOtro.trim()) e[f.k] = true;
    });
    setErrs(e);
    return Object.keys(e).length === 0;
  }
  function submit() {
    if (!validate()) return;
    const stored = Object.assign(emptyValues(fields), vals); // incluye los diferidos (vacíos)
    if (stored.tema === "__otro") stored.tema = "otro:" + temaOtro.trim();
    // "Espacio de confianza": si el líder marcó "No lo resuelvo yo", sube al jefe directo.
    const escalaAlJefe = espacioConfianza && stored.resuelvoYo === false;
    const entry = { ts: Date.now(), escalado: false, vals: stored };
    setHistory((h) => [entry].concat(h).slice(0, 500));
    setDrafts((p) => { const row = {}; deferFields.forEach((f) => { row[f.k] = ""; }); return Object.assign({}, p, { [entry.ts]: row }); });
    setVals(emptyValues(formFields)); setTemaOtro(""); setErrs({}); setRepQuery(""); setRepOpen(false);
    setJustSent({ ts: entry.ts, escalado: escalaAlJefe });
    // persiste (demo localStorage ↔ Supabase) y reconcilia el id real
    window.CultivaData.saveRegistro(profileId, ritual.id, entry).then((persisted) => {
      const id = persisted && persisted.id;
      if (id) setHistory((h) => h.map((e) => e.ts === entry.ts ? Object.assign({}, e, { id: id }) : e));
      if (window.CultivaData.mode() !== "supabase") return;
      // Escalada al jefe directo:
      //  - "Espacio de confianza": solo cuando se marca "No lo resuelvo yo".
      //  - Otros rituales con autoBroadcast: comportamiento previo (sube siempre).
      if (espacioConfianza ? escalaAlJefe : !!reg.autoBroadcast) {
        const p = reg.autoBroadcast
          ? broadcastPayload(reg.autoBroadcast, stored)
          : { tema: String(ritual.title || "Espacio de confianza").slice(0, 120),
              detalle: String(stored.contexto || stored.detalle || "").trim() || "(sin detalle)" };
        p.registro_id = id || null;
        window.CultivaData.crearEscalada(p).catch((err) => console.warn("auto-escalada:", err));
      }
    }).catch(() => {});
  }
  function escalar(ts) {
    const entry = history.find((e) => e.ts === ts);
    setHistory((h) => h.map((e) => e.ts === ts ? Object.assign({}, e, { escalado: true }) : e));
    setEscaladoIds((p) => Object.assign({}, p, { [ts]: true }));
    if (!entry) return;
    window.CultivaData.setRegistroEscalado(profileId, ritual.id, entry).catch(() => {});
    // Puente: crear una escalada real enrutada al jefe directo (solo Supabase).
    if (window.CultivaData.mode() === "supabase") {
      const v = entry.vals || {};
      const tema = v.tema ? temaLabel(v.tema) : (ritual.title || "Tema escalado");
      const detalle = v.detalle || v.problematica || v.situacion || v.observo || "(ver registro)";
      window.CultivaData.crearEscalada({ tema: tema, detalle: detalle, requiere: v.requiere || null, registro_id: entry.id || null })
        .catch((err) => console.warn("No se pudo enrutar la escalada:", err));
    }
  }
  function setDraft(ts, k, val) {
    setDrafts((p) => Object.assign({}, p, { [ts]: Object.assign({}, p[ts], { [k]: val }) }));
    setSavedFollow((p) => { if (!p[ts]) return p; const n = Object.assign({}, p); delete n[ts]; return n; });
  }
  function saveFollow(ts) {
    const d = drafts[ts] || {};
    const entry = history.find((e) => e.ts === ts);
    if (!entry) return;
    const nv = Object.assign({}, entry.vals);
    deferFields.forEach((f) => { nv[f.k] = d[f.k] || ""; });
    setHistory((h) => h.map((e) => e.ts === ts ? Object.assign({}, e, { vals: nv, followTs: Date.now() }) : e));
    setSavedFollow((p) => Object.assign({}, p, { [ts]: true }));
    window.CultivaData.updateRegistroFollow(profileId, ritual.id, entry, nv).catch(() => {});
  }
  function followDirty(e) {
    const d = drafts[e.ts] || {};
    return deferFields.some((f) => (d[f.k] || "") !== (e.vals[f.k] || ""));
  }
  function followFilled(e) {
    return deferFields.some((f) => (e.vals[f.k] || "") !== "");
  }
  function fmt(ts) {
    try {
      return new Date(ts).toLocaleString("es-PE",
        { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
    } catch (e) { return ""; }
  }
  function temaLabel(raw) {
    if (!raw) return "—";
    if (raw.indexOf("otro:") === 0) return raw.slice(5) + " (otro)";
    const inf = temaInfo(raw); return inf ? inf.label : raw;
  }
  // arma el payload para subir al jefe directo (según reg.autoBroadcast)
  function broadcastPayload(ab, stored) {
    const tema = ab.temaFijo
      ? ab.temaFijo
      : (ab.temaEsId ? temaLabel(stored[ab.tema]) : (stored[ab.tema] || ""));
    const detalle = String(stored[ab.detalle] || "").trim();
    return {
      tema: String(tema || "Tema").slice(0, 120),
      detalle: detalle || "(sin detalle)",
    };
  }

  // ---- field renderer (formulario inicial) ----
  function renderField(f) {
    const bad = !!errs[f.k];
    const idAttr = storeKey + ":" + f.k;
    const common = { id: idAttr, value: vals[f.k], className: "fld-ctrl" + (bad ? " err" : "") };
    let control;

    if (f.t === "tema") {
      control = rh("div", { className: "fld-sel-wrap" },
        rh("select", Object.assign({}, common, { className: common.className + " fld-sel",
          onChange: (e) => setField(f.k, e.target.value) }),
          rh("option", { value: "" }, "Elegir tema…"),
          window.TEMAS.grupos.map((g) =>
            rh("optgroup", { key: g.id, label: g.label },
              g.items.map((it) => rh("option", { key: it.id, value: it.id }, it.label)))),
          rh("option", { value: "__otro" }, "Otro (especificar)…"),
        ),
        RI("chevron-down", "fld-sel-ico"),
      );
    } else if (f.t === "reportes") {
      const hasRep = reportes.length > 0;
      const chosen = vals[f.k];
      const nq = normTxt(repQuery);
      const filtered = nq ? reportes.filter((r) => normTxt(r.nombre).indexOf(nq) >= 0) : reportes;
      const ph = !reportesLoaded ? RT("form.loading")
        : (hasRep ? RT("form.searchReport") : RT("form.noReports"));
      control = rh("div", { className: "fld-combo" },
        rh("div", { className: "fld-sel-wrap" },
          rh("input", {
            id: idAttr, autoComplete: "off",
            className: "fld-ctrl" + (bad ? " err" : ""),
            value: repQuery, placeholder: ph,
            // texto libre: la lista es solo una sugerencia (aún no todo el equipo está en el padrón)
            onChange: (e) => { setRepQuery(e.target.value); setField(f.k, e.target.value.trim()); setRepOpen(true); },
            onFocus: () => setRepOpen(true),
            onBlur: () => setTimeout(() => setRepOpen(false), 160),
          }),
          (chosen && reportes.some((r) => r.nombre === chosen)) ? RI("check", "fld-sel-ico") : RI("search", "fld-sel-ico"),
        ),
        (repOpen && hasRep && filtered.length) ? rh("div", { className: "combo-list" },
          filtered.slice(0, 60).map((r) => rh("button", {
            key: r.legajo || r.nombre, type: "button", className: "combo-item",
            onMouseDown: () => { setField(f.k, r.nombre); setRepQuery(r.nombre); setRepOpen(false); },
          }, r.nombre))
        ) : null,
      );
    } else if (f.t === "area") {
      control = rh("textarea", Object.assign({}, common, {
        rows: 2, placeholder: f.ph || RT("form.writeHere"),
        onChange: (e) => setField(f.k, e.target.value),
      }));
    } else if (f.t === "sel") {
      control = rh("div", { className: "fld-sel-wrap" },
        rh("select", Object.assign({}, common, { className: common.className + " fld-sel",
          onChange: (e) => setField(f.k, e.target.value) }),
          rh("option", { value: "" }, RT("form.choose")),
          (f.o || []).map((opt) => rh("option", { key: opt, value: opt }, opt)),
        ),
        RI("chevron-down", "fld-sel-ico"),
      );
    } else if (f.t === "bool") {
      control = rh("button", {
        type: "button",
        className: "fld-toggle" + (vals[f.k] ? " on" : ""),
        onClick: () => setField(f.k, !vals[f.k]),
        "aria-pressed": !!vals[f.k],
      },
        rh("span", { className: "fld-toggle-knob" }, vals[f.k] ? CheckIco("ico-xs") : null),
        rh("span", { className: "fld-toggle-txt" }, vals[f.k] ? RT("form.yes") : RT("form.no")),
      );
    } else {
      const typeMap = { text: "text", date: "date", time: "time", num: "number", person: "text" };
      control = rh("input", Object.assign({}, common, {
        type: typeMap[f.t] || "text",
        placeholder: f.ph || (f.t === "person" ? RT("form.namePlaceholder") : ""),
        inputMode: f.t === "num" ? "numeric" : undefined,
        onChange: (e) => setField(f.k, e.target.value),
      }));
    }

    const wide = (f.t === "area" || f.t === "tema" || f.t === "reportes");
    return rh("div", { className: "fld" + (wide ? " wide" : "") + (f.t === "bool" ? " inline" : ""), key: f.k },
      rh("label", { className: "fld-l", htmlFor: idAttr },
        f.l, f.req ? rh("span", { className: "req" }, "*") : null,
        f.t === "person" ? RI("user", "fld-l-ico") : null,
      ),
      control,
      f.t === "tema" && vals[f.k] === "__otro"
        ? rh("input", { className: "fld-ctrl", style: { marginTop: "8px" },
            placeholder: "Escribe el tema…", value: temaOtro,
            onChange: (e) => setTemaOtro(e.target.value) })
        : null,
      bad ? rh("div", { className: "fld-err" }, "Requerido") : null,
      f.hint ? rh("div", { className: "fld-hint" }, f.hint) : null,
    );
  }

  // ---- control diferido (dentro de un registro guardado) ----
  function renderFollowControl(e, f) {
    const d = drafts[e.ts] || {};
    const v = d[f.k] != null ? d[f.k] : "";
    const idAttr = storeKey + ":" + e.ts + ":" + f.k;
    const common = { id: idAttr, value: v, className: "fld-ctrl",
      onChange: (ev) => setDraft(e.ts, f.k, ev.target.value) };
    let control;
    if (f.t === "area") {
      control = rh("textarea", Object.assign({}, common, { rows: 2, placeholder: f.ph || RT("form.writeHere") }));
    } else if (f.t === "date") {
      control = rh("input", Object.assign({}, common, { type: "date" }));
    } else {
      control = rh("input", Object.assign({}, common, { type: "text", placeholder: f.ph || RT("form.writeHere") }));
    }
    return rh("div", { className: "fu-fld", key: f.k },
      rh("label", { className: "fld-l", htmlFor: idAttr }, f.l),
      control,
    );
  }

  // alerta del tema elegido (p.ej. paralizaciones)
  const chosen = temaInfo(vals.tema);
  const alerta = chosen && chosen.alerta ? window.TEMAS.alertas[chosen.alerta] : null;

  return rh("section", { className: "registro" },
    (!needsReportes && reg.soporte) ? rh("div", { className: "registro-soporte" },
      RI("smartphone", "ico-xs"), rh("span", null, reg.soporte)) : null,

    justSent && rh("div", { className: "sent-banner" },
      RI("check-check", "ico-xs"),
      rh("div", null,
        rh("b", null, RT("form.saved")), " · ", fmt(justSent.ts),
        // sin subtítulo "Disponible para tu líder": solo se muestra si hay algo pendiente
        (justSent.escalado || deferFields.length || escalateTo) ? rh("div", { className: "sent-sub" },
          justSent.escalado
            ? RT("form.subEscalated")
            : deferFields.length ? RT("form.subDefer") : RT("form.subCanEscalate")) : null,
      ),
    ),

    rh("div", { className: "fld-grid" }, formFields.map(renderField)),

    // alerta especial al elegir tema
    alerta && rh("div", { className: "tema-alerta" },
      RI("alert-triangle", "ico-sm"),
      rh("div", null, rh("b", null, chosen.label + ". "), alerta)),

    rh("div", { className: "registro-actions" },
      rh("button", { className: "btn-send", type: "button", onClick: submit },
        RI("save", "ico-xs"), RT("form.save")),
    ),

    // historial (filtrado por periodo: último mes / último año)
    (() => {
      const desde = Date.now() - (histPer === "anio" ? 365 : 30) * 86400000;
      const histVis = history.filter((e) => (e.ts || 0) >= desde);
      return rh("div", { className: "hist" },
      rh("button", { className: "hist-h" + (open ? " on" : ""), type: "button", onClick: () => setOpen(!open),
          "aria-expanded": open },
        rh("span", { className: "hist-ico" }, RI("history", "ico-xs")),
        rh("span", null, RT("form.history")),
        // siempre presente (vacío si no hay registros) para no insertar nodos junto a íconos lucide
        rh("span", { className: "hist-count", style: histVis.length ? null : { display: "none" } }, histVis.length || ""),
        rh("span", { key: open ? "up" : "down", className: "hist-ico" }, RI(open ? "chevron-up" : "chevron-down", "ico-xs")),
      ),
      open ? rh("div", { className: "hist-per", role: "group", "aria-label": RT("form.histPeriod") },
        [["mes", RT("form.histMonth")], ["anio", RT("form.histYear")]].map(([v, lbl]) =>
          rh("button", { key: v, type: "button", className: "hist-per-b" + (histPer === v ? " on" : ""),
            "aria-pressed": histPer === v, onClick: () => setHistPer(v) }, lbl))) : null,
      (open && histVis.length === 0) ? rh("div", { className: "hist-empty" },
        history.length ? RT("form.historyEmptyPeriod") : RT("form.historyEmpty")) : null,
      (open && histVis.length > 0) && rh("div", { className: "hist-list" },
        histVis.map((e, i) => {
          // estado de la escalada que YO levanté desde este registro (si existe)
          const escInfo = e.id ? escStatus[e.id] : null;
          const st = escInfo ? ESC_ST[escInfo.status] : null;
          const isEsc = !!escaladoIds[e.ts] || e.escalado || !!escInfo;
          const dirty = followDirty(e);
          const filled = followFilled(e);
          const justSaved = !!savedFollow[e.ts];
          return rh("div", { key: e.ts + ":" + i, className: "hist-item" + (isEsc ? " esc" : "") },
            rh("div", { className: "hist-top" },
              st ? rh("span", { className: "hist-badge esc", style: { color: st.c } }, RI(st.ico, "ico-xs"), st.t)
                 : isEsc ? rh("span", { className: "hist-badge esc" }, RI("arrow-up", "ico-xs"), "Escalado a tu " + (escalateTo || "líder"))
                 : rh("span", { className: "hist-badge" }, RI("check", "ico-xs"), "Guardado"),
              rh("span", { className: "hist-ts" }, fmt(e.ts)),
            ),
            rh("div", { className: "hist-detail" },
              formFields.map((f) => {
                let v = e.vals[f.k];
                if (v === "" || v == null) return null;
                if (f.t === "bool" && v === false && f.k !== "resuelvoYo") return null;
                let disp = (f.t === "bool") ? (v ? RT("form.yes") : RT("form.no")) : (f.t === "tema" ? temaLabel(v) : String(v));
                return rh("div", { key: f.k, className: "hist-kv" },
                  rh("span", { className: "hist-k" }, f.l), rh("span", { className: "hist-v" }, disp));
              }),
            ),

            // bloque de seguimiento: acuerdo / comentarios (se completan después)
            deferFields.length ? rh("div", { className: "hist-fu" + (filled && !dirty ? " done" : "") },
              rh("div", { className: "hist-fu-h" },
                RI(filled && !dirty ? "check-circle-2" : "message-square-plus", "ico-xs"),
                rh("span", null, "Acuerdo y comentarios"),
                (filled && !dirty)
                  ? rh("span", { className: "fu-state" }, justSaved ? "Guardado ahora" : "Completado")
                  : rh("span", { className: "fu-state pend" }, "Por completar"),
              ),
              rh("div", { className: "fu-grid" }, deferFields.map((f) => renderFollowControl(e, f))),
              rh("button", {
                className: "btn-fu", type: "button", disabled: !dirty,
                onClick: () => dirty && saveFollow(e.ts),
              }, RI("save", "ico-xs"), dirty ? RT("form.saveFollow") : RT("form.savedFollow")),
            ) : null,

            // escalar (solo rituales que lo permiten)
            escalateTo ? rh("div", { className: "hist-escbar" + (isEsc ? " done" : "") },
              isEsc
                ? rh("span", { className: "he-txt" }, "Este tema ya viajó hacia arriba con tu contexto.")
                : rh("span", { className: "he-txt" }, "¿Este tema te excede? Escálalo a tu " + escalateTo + "."),
              rh("button", {
                className: "btn-escalar-mini", type: "button", disabled: isEsc,
                onClick: () => !isEsc && escalar(e.ts),
              }, RI(isEsc ? "check" : "arrow-up", "ico-xs"), isEsc ? RT("form.escalated") : RT("form.escalate")),
            ) : null,
          );
        }),
      ),
    ); })(),
  );
}

window.CultivaRegistroForm = CultivaRegistroForm;
