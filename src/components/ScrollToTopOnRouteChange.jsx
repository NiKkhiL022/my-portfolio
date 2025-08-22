import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Automatically scroll window to top whenever the pathname changes.
// Avoids retaining prior scroll position when navigating between pages.
export default function ScrollToTopOnRouteChange({ behavior = "auto" }) {
  const { pathname } = useLocation();
  useEffect(() => {
    // Defer slightly to allow new layout paint (especially when images or fonts load)
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, behavior]);
  return null;
}
