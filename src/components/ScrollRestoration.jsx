import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Scroll restoration behavior:
// - On PUSH / REPLACE (normal forward navigation) -> scroll to top (old behavior)
// - On POP (back/forward buttons) -> restore previous scroll position if stored
// Stores scrollY for each location.key before moving away.
export default function ScrollRestoration({ topOnForward = true }) {
  const location = useLocation();
  const navigationType = useNavigationType(); // 'POP' | 'PUSH' | 'REPLACE'
  const positionsRef = useRef(new Map()); // key -> scrollY
  const prevKeyRef = useRef(null);
  const prevPathRef = useRef(location.pathname);
  const projectsScrollRef = useRef(null); // last known scroll inside /projects list

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    const prevPath = prevPathRef.current;

    // 1. Persist scroll position of the page we're leaving
    if (prevKey) {
      positionsRef.current.set(prevKey, window.scrollY);
      if (prevPath === "/projects") {
        projectsScrollRef.current = window.scrollY;
      }
    }

    // 2. Decide restoration strategy
    const isProjectsList = location.pathname === "/projects";
    const cameFromProjectDetail =
      prevPath.startsWith("/projects/") && prevPath !== "/projects";

    const hasPendingProjectsRestore =
      location.pathname === "/projects" &&
      (() => {
        try {
          return sessionStorage.getItem("projectsScroll");
        } catch {
          return null;
        }
      })();

    if (hasPendingProjectsRestore) {
      // Let Projects component handle multi-attempt restore; don't override.
    } else if (navigationType === "POP") {
      // Browser back/forward: restore if we have it
      const stored = positionsRef.current.get(location.key);
      if (typeof stored === "number") {
        requestAnimationFrame(() => window.scrollTo(0, stored));
      }
    } else if (isProjectsList && cameFromProjectDetail) {
      // Forward navigation via in-app Link from a detail page back to list
      const storedListPos = projectsScrollRef.current;
      if (typeof storedListPos === "number") {
        requestAnimationFrame(() => window.scrollTo(0, storedListPos));
      } else if (topOnForward) {
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
      }
    } else if (topOnForward) {
      // Default forward behavior: go to top
      requestAnimationFrame(() =>
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      );
    }

    // 3. Update refs for next navigation
    prevKeyRef.current = location.key;
    prevPathRef.current = location.pathname;
  }, [location, navigationType, topOnForward]);

  return null;
}
