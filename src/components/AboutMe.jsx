import React from "react";
import myImage from "../assets/images/my-image.jpeg"; // Ensure bundler processes the image for production

// --- SVG Icons ---
// Using inline SVGs for the icons to avoid external dependencies.
const InterfaceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[color:var(--site-fg)]/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const HtmlCssIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[color:var(--site-fg)]/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);
const ReactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[color:var(--site-fg)]/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const AiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[color:var(--site-fg)]/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// --- Reusable Components ---
const SkillCard = ({ icon, title, children }) => (
  <div className="bg-[color:var(--site-bg)] border border-[color:var(--site-fg)]/15 p-6 rounded-lg flex items-start gap-4">
    <div>{icon}</div>
    <div>
      <h3 className="font-bold text-sm text-[color:var(--site-fg)]">{title}</h3>
      <p className="text-xs text-[color:var(--site-fg)]/80 mt-1">{children}</p>
    </div>
  </div>
);

const ExperienceList = ({ title, items }) => (
  <div className="bg-[color:var(--site-bg)] border border-[color:var(--site-fg)]/15 p-8 rounded-lg">
    <div className="border-l-2 border-[color:var(--site-fg)]/20 pl-6">
      <h3 className="font-bold text-[color:var(--site-fg)] mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-[color:var(--site-fg)]/80">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Main AboutMe Component ---
const AboutMe = () => {
  // Updated summary based on all your projects
  const professionalSummary =
    "A highly skilled Front-End Developer with 3+ years of experience architecting and building sophisticated, high-performance web applications. My expertise lies in creating scalable solutions with Svelte/SvelteKit and TypeScript, demonstrated by my work on a multi-client monorepo SDK and a comprehensive design system (Apex). I have a proven track record of leading complex projects, including full CMS migrations, developing intricate GSAP animations, and building robust, component-driven UIs for enterprise-level admin panels. A collaborative developer dedicated to transforming complex requirements into elegant, maintainable, and impactful digital experiences.";

  // Re-categorized skills based on all your projects
  const experiences = {
    // Core Technologies
    years: [
      "Svelte / SvelteKit",
      "TypeScript",
      "JavaScript (ES6+)",
      "React & React Native",
      "GSAP (Animation)",
      "HTML5 & SCSS/CSS3",
    ],
    // Tools & Platforms
    had: [
      "Git, GitHub",
      "Figma",
      "Storybook",
      "Headless CMS (Apex)",
      "FFmpeg",
      "Eleventy (11ty)",
    ],
    // Concepts & Architectures
    study: [
      "Design Systems",
      "Component-Driven Architecture",
      "Monorepo & SDK Development",
      "Responsive Web & Email Design",
      "API Integration (RESTful)",
      "Performance Optimization",
    ],
  };

  return (
    <section
      id="about-me"
      className="font-mono site-bg text-[var(--site-fg)] px-6 py-10 md:px-12 md:py-16 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-10 md:mb-12">
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
              about me
            </h2>
            <div className="absolute left-0 -bottom-2 h-1.5 w-20 bg-[var(--site-fg)]" />
          </div>
        </div>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="flex-shrink-0">
            <img
              src={myImage}
              alt="Gattadi Nikhil Avatar"
              loading="lazy"
              width={192}
              height={192}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-[color:var(--site-fg)]/10 object-cover border-4 border-[var(--site-bg)] shadow-md"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/192x192/cccccc/FFFFFF?text=N&font=monospace";
              }}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--site-fg)]">
              Gattadi Nikhil
            </h3>
            <p className="text-sm text-left text-[color:var(--site-fg)]/80 my-4 max-w-full">
              {professionalSummary}
            </p>
            {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-xs font-semibold tracking-widest uppercase">
              <a href="#" className="hover:text-[var(--site-fg)]">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[var(--site-fg)]">
                GitHub
              </a>
              <a href="#" className="hover:text-[var(--site-fg)]">
                Email
              </a>
            </div> */}
          </div>
        </div>

        {/* Skills Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          <SkillCard icon={<InterfaceIcon />} title="Component Architecture">
            Building scalable, reusable UI systems.
          </SkillCard>
          <SkillCard icon={<HtmlCssIcon />} title="Web & Email Development">
            Responsive websites & robust HTML emails.
          </SkillCard>
          <SkillCard icon={<ReactIcon />} title="Advanced Animation">
            Creating cinematic experiences with GSAP.
          </SkillCard>
          <SkillCard icon={<AiIcon />} title="Modern Frameworks">
            Expertise in SvelteKit, React & React Native.
          </SkillCard>
        </div>

        {/* Experience Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExperienceList title="Core Technologies" items={experiences.years} />
          <ExperienceList title="Tools & Platforms" items={experiences.had} />
          <ExperienceList
            title="Concepts & Architectures"
            items={experiences.study}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
