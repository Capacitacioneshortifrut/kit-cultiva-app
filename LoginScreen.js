/* ============================================================
   LOGIN · acceso SOLO con LEGAJO (sin contraseña)
   El usuario teclea su número de legajo y entra directo a su
   perfil. Por detrás, window.CultivaAuth usa el legajo como
   contraseña para mantener sesión + RLS de Supabase (en modo
   demo solo resuelve contra el padrón local).
   Incluye acceso de REVISIÓN TEMPORAL marcado con * y un
   selector de idioma discreto (arriba a la derecha).
   ============================================================ */
const { createElement: gh, useState: gUse, useEffect: gEff, useRef: gRef } = React;
const GI = (n, c) => gh("i", { "data-lucide": n, className: c || "" });
const GT = (k) => (window.t ? window.t(k) : k);

/* selector de idioma discreto (globo + idioma actual) */
function LangSelect() {
  const [open, setOpen] = gUse(false);
  const I18N = window.CultivaI18N;
  if (!I18N) return null;
  const cur = I18N.get();
  const langs = I18N.langs || [];
  const curLabel = (langs.filter(function (x) { return x.code === cur; })[0] || {}).label || "Español";
  gEff(() => { if (window.lucide) window.lucide.createIcons(); });
  return gh("div", { className: "lang-select" },
    gh("button", {
      type: "button", className: "lang-btn", onClick: () => setOpen(!open),
      "aria-label": GT("lang.select"), title: GT("lang.select"),
    }, GI("globe", "ico-sm"), gh("span", { className: "lang-btn-cur" }, curLabel), GI(open ? "chevron-up" : "chevron-down", "ico-xs")),
    open ? gh("div", { className: "lang-menu" },
      langs.map((L) => gh("button", {
        key: L.code, type: "button",
        className: "lang-opt" + (L.code === cur ? " on" : ""),
        onClick: () => { if (L.code !== cur) I18N.set(L.code); else setOpen(false); },
      }, gh("span", null, L.label), L.code === cur ? GI("check", "ico-xs") : null))
    ) : null,
  );
}

function LoginScreen({ onLogin, onReview, onMaestro }) {
  const [idv, setIdv] = gUse("");
  const [err, setErr] = gUse("");
  const [busy, setBusy] = gUse(false);
  const idRef = gRef(null);

  const A = window.CultivaAuth;

  gEff(() => { if (window.lucide) window.lucide.createIcons(); });
  gEff(() => { if (idRef.current) idRef.current.focus(); }, []);

  function entrar() {
    if (busy) return;
    const legajo = idv.trim();
    if (!legajo) { setErr(GT("login.errNoLegajo")); return; }
    setBusy(true); setErr("");
    A.signInByLegajo(legajo).then((res) => {
      if (res.error) { setErr(res.error); setBusy(false); return; }
      const u = res.user;
      // los admin (consultores / RRHH) no tienen perfil de ritual: van al dashboard
      if (!u.es_admin && (!u.perfil || !window.PROFILES[u.perfil])) {
        setErr(GT("login.errNoProfile").replace("{p}", u.perfil || "—")); setBusy(false); return;
      }
      onLogin(u);
    }).catch(() => { setErr(GT("login.errGeneric")); setBusy(false); });
  }

  const brand = gh("div", { className: "start-brand" },
    gh("span", { className: "start-logo" },
      gh("img", { src: (window.__resources && window.__resources.logo) || "assets/logo-cultiva-color.png", alt: "Programa Cultiva" })),
    gh("div", null,
      gh("div", { className: "start-kicker" }, "Programa Cultiva"),
      gh("div", { className: "start-prog" }, GT("brand.tagline")),
    ),
  );

  const body = gh("div", { className: "login-card", key: "id" },
    gh("h1", { className: "login-q" }, GT("login.title")),
    gh("p", { className: "login-hint" }, GT("login.hint")),
    gh("label", { className: "login-l" }, GT("login.legajo")),
    gh("input", {
      ref: idRef, className: "login-input", value: idv, placeholder: "10XXXXXXXX", inputMode: "numeric",
      onChange: (e) => { setIdv(e.target.value); if (err) setErr(""); },
      onKeyDown: (e) => { if (e.key === "Enter") entrar(); },
    }),
    err ? gh("div", { className: "login-err" }, GI("alert-circle", "ico-xs"), err) : null,
    gh("button", { className: "login-btn", type: "button", onClick: entrar, disabled: busy },
      busy ? GT("login.entering") : GT("login.enter"), GI("arrow-right", "ico-sm")),
  );

  return gh("div", { className: "screen start login" },
    gh(LangSelect),
    brand,
    gh("div", { className: "login-body" }, body),
    onMaestro ? gh("button", { className: "login-maestro-btn", type: "button", onClick: onMaestro },
      GI("graduation-cap", "ico-sm"), GT("login.maestro")) : null,
    gh("div", { className: "login-review" },
      gh("span", { className: "login-review-star" }, "*"),
      gh("button", { className: "login-review-btn", type: "button", onClick: onReview },
        GI("key-round", "ico-xs"), GT("login.review")),
    ),
  );
}

window.LoginScreen = LoginScreen;
