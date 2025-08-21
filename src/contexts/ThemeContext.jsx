import React, { createContext, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useLayoutEffect(() => {
    try {
      const html = document.documentElement;
      const body = document.body;
      const root = document.getElementById("root");

      const enableDark = theme === "dark";

      [html, body, root].forEach((el) => {
        if (!el) return;
        el.classList[enableDark ? "add" : "remove"]("dark");
      });

      // Update CSS variables inline so body picks correct colors immediately
      const vars = enableDark
        ? { "--site-bg": "#111827", "--site-fg": "#f3f4f6" }
        : { "--site-bg": "#ffffff", "--site-fg": "#000000" };
      Object.entries(vars).forEach(([k, v]) => {
        html.style.setProperty(k, v);
      });

      // If switching to light, ensure no stray `.dark` classes remain on nested nodes
      if (!enableDark) {
        try {
          document.querySelectorAll(".dark").forEach((el) => {
            if (el !== html) el.classList.remove("dark");
          });
        } catch {
          /* no-op */
        }
      }

      // Hint for UA/theme-aware UI
      if (html && html.style) {
        html.style.colorScheme = enableDark ? "dark" : "light";
      }

      localStorage.setItem("theme", theme);
    } catch {
      // swallow
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log(`[Theme] toggleTheme: ${prevTheme} -> ${newTheme}`);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
