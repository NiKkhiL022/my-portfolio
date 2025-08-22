import resumePdf from "../assets/files/gattadi-nikhil-resume.pdf";

const resumeData = {
  name: "GATTADI NIKHIL",
  title: "Front-End Developer",
  contact: "+91 8247677768 | gattadinikhil@gmail.com | Hyderabad, TS, India",
  summary: `A highly skilled Front-End Developer with over 3 years of experience architecting and building sophisticated, high-performance web applications. My expertise lies in creating scalable solutions with Svelte/SvelteKit and React and TypeScript, demonstrated by my work on a multi-client monorepo SDK and a comprehensive Design System. I have a proven track record of leading complex projects, including full CMS migrations, developing intricate GSAP animations, and building robust, component-driven UIs for enterprise-level admin panels. A collaborative developer dedicated to transforming complex requirements into elegant, maintainable, and impactful digital experiences.`,
  skills: {
    Frameworks:
      "Svelte/SvelteKit, React, React Native, GSAP (GreenSock Animation Platform), Eleventy (11ty), Tailwind CSS",
    Languages: "TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS",
    Architecture:
      "Design Systems, Component-Driven Architecture, Monorepo & SDK Development, Headless CMS Integration, Responsive Web & Email Design, API Integration (RESTful), Performance Optimization",
    Tools:
      "Git, GitHub, Storybook, Figma, FFmpeg, Apex CMS, Unreal Engine (Blueprints)",
    AI: "Generative AI Tools, Prompt Engineering, Workflow Automation",
  },
  experience: [
    {
      role: "Front-End Developer | Able.do | Hyderabad, India",
      period: "September 2022 – Present",
      bullets: [
        "Architected and developed a wide range of sophisticated web solutions, demonstrating expertise in modern front-end technologies and complex project execution.",
        "Apex Design System & Admin Panels:",
        "Spearheaded the creation of the Apex Design System, a comprehensive, reusable component library in SvelteKit and TypeScript, documented in Storybook.",
        "Developed a wide range of robust components, including complex forms, data tables, and modals, ensuring all edge cases were handled.",
        "Leveraged the design system to rapidly build two enterprise-level admin panels (Apex-Meals & Apex-Travel), constructing the entire UI, defining JSON data structures, and integrating with backend APIs.",
        "Apex Meals SDK (Monorepo):",
        "Played a pivotal role in a multi-client monorepo designed to launch and manage numerous white-label meal subscription services from a single codebase.",
        "Managed end-to-end setup for new clients, including configuration, API integration, building bespoke Svelte components using dynamic routing ([slug]), and final deployment.",
        "Contributed to the UI development of the accompanying React Native mobile applications to ensure cross-platform consistency and a unified user experience.",
        "Keus Smart Home Website (GSAP Animation):",
        "Implemented complex, scroll-based cinematic animations using GSAP to create a premium and interactive user experience for a luxury smart home brand.",
        "Engineered a high-performance animation technique by converting videos into image sequences with FFmpeg, creating an interactive 'video-scrubbing' effect controlled by user scrolling via ScrollTrigger.",
        "CMS Migration & Website Rebuild (Team DriveAway):",
        "Led the complete rebuild and migration of a legacy website to a modern stack using Svelte and a headless CMS (Apex).",
        "Designed a highly efficient component-driven architecture where multiple similar sections were consolidated into single, reusable components, drastically reducing code duplication and improving long-term site maintainability.",
        "Responsive Email Development:",
        "Developed high-fidelity, responsive HTML email templates for marketing and transactional use, mastering the technical constraints of email clients like Outlook and Gmail.",
        "Utilized table-based layouts and inline CSS to ensure pixel-perfect, consistent rendering across all major platforms and devices.",
      ],
    },
  ],
  education: [
    "Bachelor of Technology (B.Tech), Mechanical Engineering | 2021 Hindustan Institute of Technology and Science (HITS)",
    "Diploma in Mechanical Engineering | 2018 Aurora’s Polytechnic Academy",
  ],
};

const sectionClass =
  "resume-section mt-12 first:mt-8 pt-10 border-t border-[var(--site-fg)]/10 first:border-t-0";

const Resume = () => {
  // Static PDF download: place your PDF file in /public (e.g. /public/Gattadi-Nikhil-Resume.pdf)
  // The button below is now a direct anchor tag with download attribute.

  return (
    <div className="min-h-screen site-bg transition-colors duration-200 max-w-4xl mx-auto py-10 px-6 md:px-10 font-mono">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {resumeData.name}
          </h1>
          <p className="mt-1 text-sm md:text-base font-semibold">
            {resumeData.title}
          </p>
          <p className="mt-1 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">
            {resumeData.contact}
          </p>
          {/* Removed inline download button to prevent overlap with floating button */}
        </div>
      </div>

      <section className={sectionClass}>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--site-fg)]/80">
          {resumeData.summary}
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
          TECHNICAL SKILLS
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {Object.entries(resumeData.skills).map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--site-fg)]/90">
                {k.replace(/&/g, " & ")}
              </h3>
              <p className="text-[var(--site-fg)]/70 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
          WORK EXPERIENCE
        </h2>
        {resumeData.experience.map((exp) => {
          // Group bullets by subheading (lines ending in : )
          const groups = [];
          let current = { heading: null, items: [] };
          exp.bullets.forEach((b) => {
            if (/[:：]$/.test(b.trim())) {
              // push previous
              if (current.heading || current.items.length) groups.push(current);
              current = { heading: b.replace(/[:：]$/, ""), items: [] };
            } else {
              current.items.push(b);
            }
          });
          if (current.heading || current.items.length) groups.push(current);
          return (
            <div key={exp.role} className="mt-8 first:mt-6">
              <div>
                <h3 className="font-semibold text-sm md:text-base tracking-wide">
                  {exp.role}
                  <span className="block md:inline font-normal text-[var(--site-fg)]/60 md:ml-2 text-xs md:text-sm">
                    {exp.period}
                  </span>
                </h3>
              </div>
              <div className="mt-4 flex flex-col gap-6">
                {groups.map((g, idx) => (
                  <div key={idx} className="group">
                    {g.heading && (
                      <h4 className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[var(--site-fg)]/80 mb-2 border-l-2 border-[var(--site-fg)]/30 pl-2">
                        {g.heading}
                      </h4>
                    )}
                    {g.items.length > 0 && (
                      <ul className="list-disc list-outside pl-5 space-y-1 text-sm leading-relaxed marker:text-[var(--site-fg)]/50">
                        {g.items.map((item, i) => (
                          <li key={i} className="text-[var(--site-fg)]/80">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className={sectionClass}>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
          EDUCATION
        </h2>
        <div className="mt-6 space-y-4">
          {resumeData.education.map((ed) => (
            <p
              key={ed}
              className="text-sm leading-relaxed text-[var(--site-fg)]/80 border-l-2 border-[var(--site-fg)]/20 pl-3"
            >
              {ed}
            </p>
          ))}
        </div>
      </section>
      {/* Floating fixed download button */}
      <a
        href={resumePdf}
        download
        aria-label="Download Resume PDF"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full w-12 h-12 bg-[var(--site-fg)] text-[var(--site-bg)] shadow-lg shadow-black/20 hover:shadow-black/40 transition-shadow border border-[var(--site-fg)]/20 group z-50 print:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 group-hover:scale-110 transition-transform"
        >
          <path d="M12 16a1 1 0 0 0 .707-.293l5-5-1.414-1.414L13 12.586V3h-2v9.586L7.707 9.293 6.293 10.707l5 5A1 1 0 0 0 12 16Z" />
          <path d="M5 18h14v2H5z" />
        </svg>
      </a>
    </div>
  );
};

export default Resume;
