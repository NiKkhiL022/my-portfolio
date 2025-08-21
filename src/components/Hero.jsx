import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import gsap from "gsap";
import { ThemeContext } from "../contexts/ThemeContext";

// VerticalText component for the side navigation items
const VerticalText = ({
  children,
  className = "",
  isActive,
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`transform text-left whitespace-nowrap uppercase tracking-widest text-sm font-semibold transition-colors duration-300 disabled:opacity-50 ${
      isActive
        ? "text-[var(--site-fg)]"
        : "text-gray-500 hover:text-[var(--site-fg)]"
    } ${className}`}
  >
    {children}
  </button>
);

// Main Hero component
const Hero = () => {
  const developerTitle = "front-end. web (developer)";
  const [activeLink, setActiveLink] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark"; // still used for toggle label

  const navItems = ["home", "cases", "projects", "about me", "contact"];

  // Split title into individual letters for the animation
  const letters = useMemo(() => developerTitle.split(""), [developerTitle]);
  const containerRef = useRef(null);
  // Stable array of refs indexed by character
  const letterRefs = useRef([]);
  const setLetterRef = (el, idx) => {
    letterRefs.current[idx] = el;
  };

  useEffect(() => {
    // Ensure DOM is ready and refs collected
    const containerEl = containerRef.current;
    const letterEls = letterRefs.current.filter(Boolean);
    if (!containerEl || letterEls.length === 0) return;

    // Respect reduced-motion preferences
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(containerEl, { autoAlpha: 1 });
      return;
    }

    // Set initial 3D context and scatter state to prevent flash
    gsap.set(containerEl, { perspective: 600, transformStyle: "preserve-3d" });
    gsap.set(letterEls, {
      transformStyle: "preserve-3d",
      x: () => gsap.utils.random(-120, 120, 1),
      y: () => gsap.utils.random(-80, 80, 1),
      z: () => gsap.utils.random(-300, 300, 1),
      rotationX: () => gsap.utils.random(-180, 180, 1),
      rotationY: () => gsap.utils.random(-180, 180, 1),
      opacity: 0,
    });

    // Timeline: regroup smoothly
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(letterEls, {
      duration: 1.0,
      x: 0,
      y: 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      opacity: 1,
      ease: "power3.out",
      stagger: { each: 0.02, from: "random" },
    })
      // subtle settle pulse
      .to(
        letterEls,
        {
          duration: 0.35,
          y: (i) => (i % 2 === 0 ? -3 : 3),
          ease: "sine.inOut",
          stagger: 0.01,
        },
        "+=0.05"
      )
      .to(letterEls, {
        duration: 0.35,
        y: 0,
        ease: "sine.inOut",
        stagger: 0.01,
      });

    // Cleanup function to kill the animation when the component unmounts
    return () => {
      tl.kill();
    };
  }, [letters]);

  return (
    <div className="relative flex flex-col min-h-screen font-mono overflow-hidden site-bg">
      {/* Header Section */}
      <header className="w-full p-6 sm:p-8 lg:p-10">
        <div className="flex justify-between items-start w-full">
          <div className="text-[20px] md:text-2xl font-bold tracking-tighter">
            Gattadi Nikhil
          </div>
          <div className="text-right">
            <p className="font-semibold text-sm">Front-End Developer</p>
            <p className="text-xs text-gray-500">Hyderabad, IN</p>
          </div>
        </div>
        <hr className="border-[var(--site-fg)]/40 mt-4" />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Left Side Navigation */}
        <aside className="absolute left-0 inset-y-0 hidden md:flex flex-col justify-center items-center px-2 sm:px-4 lg:px-6 pointer-events-none">
          <div className="flex flex-col items-start justify-center space-y-10 lg:space-y-16 xl:space-y-20 pointer-events-auto">
            {navItems.map((item) => (
              <VerticalText
                key={item}
                isActive={activeLink === item}
                onClick={() => setActiveLink(item)}
              >
                {item}
              </VerticalText>
            ))}
          </div>
        </aside>

        {/* Center Text */}
        <div className="text-center max-w-[90vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <h1
              ref={containerRef}
              className="font-text-dotgothic16- leading-[1.1] tracking-tight text-[28px] xs:text-3xl sm:text-4xl lg:text-6xl xl:text-7xl"
            >
              {letters.map((char, i) =>
                char === " " ? (
                  <span key={`sp-${i}`}>&nbsp;</span>
                ) : (
                  <span
                    key={`ch-${char}-${i}`}
                    ref={(el) => setLetterRef(el, i)}
                    className="inline-block will-change-transform"
                  >
                    {char}
                  </span>
                )
              )}
              <span className="inline-block w-8 sm:w-10 md:w-12 h-[2px] bg-[var(--site-fg)]/80 ml-2 align-middle"></span>
            </h1>
          </div>
        </div>

        {/* Right Side "dark mode" toggle */}
        <aside className="absolute right-0 inset-y-0 md:flex flex-col justify-end items-center px-2 sm:px-4 lg:px-6 pb-8">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`pl-5 transform  whitespace-nowrap uppercase tracking-widest text-sm font-semibold transition-colors duration-300 ${
              isDark
                ? "text-[var(--site-fg)]"
                : "text-gray-400 hover:text-[var(--site-fg)]"
            }`}
          >
            {isDark ? "light mode." : "dark mode."}
          </button>
        </aside>
      </main>

      {/* Mobile Footer Navigation (visible only on small screens) */}
      <footer className="w-full p-3 sm:p-4 md:hidden">
        <div className="flex justify-around items-center text-[10px] xs:text-xs uppercase text-gray-500 font-semibold">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s/g, "-")}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item);
              }}
              className={`transition-colors duration-300 ${
                activeLink === item
                  ? "text-[var(--site-fg)]"
                  : "text-gray-500 hover:text-[var(--site-fg)]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Hero;
