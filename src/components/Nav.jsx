import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// navItems config
// type: 'section' for in-page scroll, 'route' for routed pages
const NAV_ITEMS = [
  { key: "home", label: "Home", type: "section", target: "root-top" },
  { key: "projects", label: "Projects", type: "section", target: "projects" },
  { key: "about", label: "About me", type: "section", target: "about-me" },
  { key: "contact", label: "Contact", type: "section", target: "contact" },
  { key: "resume", label: "Resume", type: "route", target: "/resume" },
];

export function Nav({
  orientation = "vertical", // 'vertical' | 'horizontal'
  activeKey,
  setActiveKey,
  className = "",
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // Static PDF download: place your file at /public/Gattadi-Nikhil-Resume.pdf (or update the href below)

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (item) => {
    setActiveKey?.(item.key);
    if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToId(item.target), 30);
      } else {
        scrollToId(item.target);
      }
    } else if (item.type === "route") {
      navigate(item.target);
    }
  };

  const isVertical = orientation === "vertical";
  const containerClasses = isVertical
    ? "flex flex-col items-start space-y-10 lg:space-y-16 xl:space-y-20 capitalize"
    : "flex justify-around items-center capitalize";

  return (
    <nav className={`uppercase font-semibold tracking-widest ${className}`}>
      <div className={containerClasses}>
        {NAV_ITEMS.map((item) => {
          const active = activeKey === item.key;
          const base = active
            ? "text-[var(--site-fg)]"
            : "text-gray-500 hover:text-[var(--site-fg)]";
          if (item.key === "resume") {
            return (
              <div key={item.key} className="flex items-center gap-2">
                <button
                  onClick={() => handleClick(item)}
                  className={`text-left ${base} transition-colors text-[10px] sm:text-sm`}
                >
                  {item.label}
                </button>
              </div>
            );
          }
          return (
            <button
              key={item.key}
              onClick={() => handleClick(item)}
              className={`${base} transition-colors text-[10px] sm:text-sm`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
