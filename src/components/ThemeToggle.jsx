import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/**
 * Compact theme toggle switch.
 * Accessible: role="switch" + aria-checked + keyboard focus.
 * Visuals rely on --site-fg / --site-bg so it blends with existing design system.
 */
const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      className={`group relative inline-flex items-center select-none outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--site-fg)]/40 rounded-full ${className}`}
    >
      {/* Track wrapper gives extra padding so internal shadows never leak */}
      <span
        className={`relative w-14 h-7 flex items-center rounded-full px-[6px] transition-colors duration-300 overflow-hidden isolate
          ${
            isDark
              ? "bg-[color:var(--site-fg)]/15 border border-[color:var(--site-fg)]/35"
              : "bg-[color:var(--site-fg)]/10 border border-[color:var(--site-fg)]/25"
          }`}
        style={{
          boxShadow: isDark
            ? "inset 0 0 0 1px rgba(255,255,255,.06), inset 0 2px 4px -1px rgba(0,0,0,.6)"
            : "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 1px 2px rgba(0,0,0,.12)",
        }}
      >
        {/* Soft hover aura contained inside track */}
        <span
          aria-hidden
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none
            ${
              isDark
                ? "bg-[radial-gradient(circle_at_70%_50%,var(--site-fg)_0%,transparent_70%)]"
                : "bg-[radial-gradient(circle_at_30%_50%,var(--site-fg)_0%,transparent_70%)]"
            }`}
        />
        {/* Knob: morphs between sun (light) and moon (dark) */}
        <span
          aria-hidden
          className={`relative z-10 inline-flex w-5 h-5 rounded-full bg-[color:var(--site-fg)] text-[color:var(--site-bg)] transition-transform duration-300 ease-[cubic-bezier(.65,.05,.36,1)] will-change-transform
            ${isDark ? "translate-x-6" : "translate-x-0"}`}
          style={{
            boxShadow: isDark
              ? "0 0 0 1px var(--site-bg) inset, 0 0 0 1px var(--site-fg)"
              : "0 0 0 1px var(--site-bg) inset, 0 0 0 1px var(--site-fg)",
          }}
        >
          <span className="relative w-full h-full">
            {/* Sun Icon */}
            <svg
              className={`absolute inset-0 w-full h-full p-[2px] transition-all duration-300 ease-out ${
                isDark
                  ? "opacity-0 scale-75 rotate-45"
                  : "opacity-100 scale-100 rotate-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            {/* Moon Icon */}
            <svg
              className={`absolute inset-0 w-full h-full p-[3px] transition-all duration-300 ease-out ${
                isDark
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 -rotate-45"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
            </svg>
          </span>
        </span>
        {/* Optional subtle gradient end caps for context */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-300 ${
            isDark
              ? "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15))]"
              : "bg-[linear-gradient(90deg,rgba(0,0,0,0.1),transparent)]"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
