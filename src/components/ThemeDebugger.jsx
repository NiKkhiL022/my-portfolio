import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeDebugger() {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    html: false,
    body: false,
    root: false,
    htmlClasses: "",
    bodyClasses: "",
    rootClasses: "",
    htmlBg: "",
    htmlColor: "",
    bodyBg: "",
    bodyColor: "",
    rootBg: "",
    rootColor: "",
    heroBg: "",
    heroColor: "",
  });

  useEffect(() => {
    try {
      const html = document.documentElement;
      const body = document.body;
      const root = document.getElementById("root");
      const hero =
        document.querySelector(".min-h-screen") ||
        document.querySelector("main") ||
        document.body;

      const computed = (el) => {
        try {
          const cs = window.getComputedStyle(el);
          return { bg: cs.backgroundColor, color: cs.color };
        } catch {
          return { bg: "", color: "" };
        }
      };

      const h = computed(html);
      const b = computed(body);
      const r = root ? computed(root) : { bg: "", color: "" };
      const hr = hero ? computed(hero) : { bg: "", color: "" };

      setState({
        html: html.classList.contains("dark"),
        body: body.classList.contains("dark"),
        root: !!(root && root.classList.contains("dark")),
        htmlClasses: html.className || "(none)",
        bodyClasses: body.className || "(none)",
        rootClasses: root ? root.className || "(none)" : "(no-root)",
        htmlBg: h.bg,
        htmlColor: h.color,
        bodyBg: b.bg,
        bodyColor: b.color,
        rootBg: r.bg,
        rootColor: r.color,
        heroBg: hr.bg,
        heroColor: hr.color,
      });
    } catch {
      // ignore
    }
  }, [theme]);

  const runDiagnostics = () => {
    try {
      const hero =
        document.querySelector(".min-h-screen") ||
        document.querySelector("main") ||
        document.body;
      const computed = getComputedStyle(hero);
      const info = {
        heroSelector: hero ? hero.className || hero.tagName : "(none)",
        heroInlineStyle: hero
          ? hero.getAttribute("style") || "(none)"
          : "(no-hero)",
        heroClassList: hero ? hero.className || "(none)" : "(no-hero)",
        computedBg: computed.backgroundColor,
        computedColor: computed.color,
        localStorageTheme: (() => {
          try {
            return localStorage.getItem("theme");
          } catch {
            return "(no-storage)";
          }
        })(),
        prefersDark: !!(
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ),
        matchedRules: [],
      };

      // Walk stylesheets to find rules that match this element and set background or color
      const sheets = Array.from(document.styleSheets || []);
      for (const sheet of sheets) {
        try {
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;
          for (const r of rules) {
            try {
              if (
                r.selectorText &&
                hero &&
                hero.matches &&
                hero.matches(r.selectorText)
              ) {
                const bg =
                  r.style && r.style.backgroundColor
                    ? r.style.backgroundColor
                    : "";
                const color = r.style && r.style.color ? r.style.color : "";
                if (bg || color) {
                  info.matchedRules.push({
                    href: sheet.href || "inline",
                    selector: r.selectorText,
                    cssText: r.cssText,
                  });
                }
              }
            } catch {
              // selector might be unsupported, skip
            }
          }
        } catch {
          // cross-origin stylesheets will throw; ignore
        }
      }

      console.log("[Theme][DIAG]", info);
      setState((s) => ({ ...s, diagnostics: JSON.stringify(info, null, 2) }));
    } catch {
      console.log("[Theme][DIAG] error running diagnostics");
      setState((s) => ({ ...s, diagnostics: "(error)" }));
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 12,
        top: 12,
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "8px 10px",
        borderRadius: 6,
        zIndex: 9999,
        fontSize: 12,
        maxWidth: 320,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Theme debug</div>
      <div style={{ marginBottom: 6 }}>theme: {theme}</div>
      <div style={{ fontSize: 11, marginBottom: 4 }}>
        <strong>Classes</strong>
        <div>html: {state.htmlClasses}</div>
        <div>body: {state.bodyClasses}</div>
        <div>#root: {state.rootClasses}</div>
      </div>

      <div style={{ fontSize: 11, marginBottom: 4 }}>
        <strong>Has dark class</strong>
        <div>html.dark: {String(state.html)}</div>
        <div>body.dark: {String(state.body)}</div>
        <div>#root.dark: {String(state.root)}</div>
      </div>

      <div style={{ fontSize: 11 }}>
        <strong>Computed styles</strong>
        <div>html bg: {state.htmlBg}</div>
        <div>html color: {state.htmlColor}</div>
        <div>body bg: {state.bodyBg}</div>
        <div>body color: {state.bodyColor}</div>
        <div>#root bg: {state.rootBg}</div>
        <div>#root color: {state.rootColor}</div>
        <div>hero bg: {state.heroBg}</div>
        <div>hero color: {state.heroColor}</div>
      </div>

      <div style={{ marginTop: 8 }}>
        <button
          onClick={runDiagnostics}
          style={{
            padding: "6px 8px",
            fontSize: 12,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Run diagnostics
        </button>
      </div>

      {state.diagnostics && (
        <pre
          style={{
            marginTop: 8,
            maxHeight: 220,
            overflow: "auto",
            fontSize: 10,
            color: "#fff",
          }}
        >
          {state.diagnostics}
        </pre>
      )}
    </div>
  );
}
