import React, { useEffect, useState } from "react";

// Reusable floating Scroll-To-Top button
// Appears after scrolling down a bit; smooth scroll to top on click.
export default function ScrollToTopButton({ threshold = 200 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed z-50 bottom-16 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-[var(--site-fg)]/30 bg-[var(--site-bg)]/80 backdrop-blur-sm text-[var(--site-fg)] shadow-lg shadow-black/10 hover:shadow-black/30 transition-all group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
      >
        <path d="M12 8a1 1 0 0 0-.707.293l-5 5 1.414 1.414L11 11.414V21h2v-9.586l3.293 3.293 1.414-1.414-5-5A1 1 0 0 0 12 8Z" />
      </svg>
    </button>
  );
}
