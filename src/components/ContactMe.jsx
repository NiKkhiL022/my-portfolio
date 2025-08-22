import React from "react";

// --- SVG Icons (brand or adaptive) ---
const baseIconClass =
  "w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-200";

const FigmaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" className="fill-[color:var(--site-fg)]/5" />
    <path d="M8 18H12V12H8V18Z" fill="#0ABF8F" />
    <path d="M8 12H12V6H8C5.79086 6 4 7.79086 4 10V12H8Z" fill="#F24E1E" />
    <path d="M12 6H16V12H12V6Z" fill="#A259FF" />
    <path d="M16 12H20C20 9.79086 18.2091 8 16 8V12Z" fill="#1ABCFE" />
    <path d="M12 18H16C18.2091 18 20 16.2091 20 14H16V18H12Z" fill="#FF7262" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#0A66C2"
      d="M22.25 0H1.75A1.75 1.75 0 0 0 0 1.75v20.5C0 23.217.783 24 1.75 24h20.5A1.75 1.75 0 0 0 24 22.25V1.75A1.75 1.75 0 0 0 22.25 0ZM7.149 20.452H3.645V9.076h3.504v11.376ZM5.397 7.618a2.213 2.213 0 1 1 0-4.205 2.213 2.213 0 0 1 0 4.205Zm15.05 12.834h-3.552V14.896c0-1.338-.025-3.044-1.802-3.044-1.778 0-2.06 1.462-2.06 2.941v5.659H9.482V9.076h3.406v1.584h.048c.502-.967 1.775-1.85 3.343-1.85 3.556 0 4.168 2.318 4.168 5.427v6.215Z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="24"
      height="24"
      rx="6"
      className="fill-black dark:fill-white"
    />
    <circle
      cx="12"
      cy="12"
      r="4.25"
      className="stroke-white dark:stroke-black"
      strokeWidth="1.5"
    />
    <circle cx="18" cy="6" r="1" className="fill-white dark:fill-black" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass + " fill-black dark:fill-white"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12C0 17.294 3.438 21.813 8.205 23.385C8.806 23.493 9.023 23.111 9.023 22.779C9.023 22.478 9.012 21.54 9.007 20.465C5.531 21.233 4.852 18.79 4.852 18.79C4.305 17.452 3.54 17.11 3.54 17.11C2.448 16.34 3.622 16.355 3.622 16.355C4.834 16.441 5.438 17.623 5.438 17.623C6.522 19.467 8.284 18.944 8.942 18.643C9.046 17.882 9.349 17.36 9.673 17.068C7.054 16.779 4.302 15.758 4.302 11.2C4.302 9.948 4.757 8.91 5.466 8.11C5.346 7.821 4.973 6.784 5.588 5.097C5.588 5.097 6.61 4.772 8.962 6.318C9.942 6.045 10.99 5.912 12.032 5.908C13.075 5.912 14.123 6.045 15.103 6.318C17.454 4.772 18.474 5.097 18.474 5.097C19.09 6.784 18.717 7.821 18.597 8.11C19.306 8.91 19.759 9.948 19.759 11.2C19.759 15.768 17.003 16.779 14.382 17.068C14.782 17.435 15.149 18.148 15.149 19.183C15.149 20.688 15.136 21.888 15.136 22.25C15.136 22.589 15.345 22.964 15.943 22.852C20.562 21.305 24 16.795 24 12C24 5.373 18.627 0 12 0Z" />
  </svg>
);

const DribbbleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#EA4C89" />
    <path
      d="M12 21.34C7.947 21.34 4.66 18.053 4.66 14C4.66 13.51 4.7 13.03 4.78 12.56L15.3 15.3C14.65 18.8 12.35 21.34 12 21.34ZM6.02 9.47C8.42 10.57 11.45 10.9 14.5 10.43L12.8 7.16C9.28 7.64 6.72 8.52 6.02 9.47ZM16.36 6.34L14.7 9.6C17.72 9.13 20.01 7.42 20.81 5.3C19.49 5.25 17.9 5.59 16.36 6.34ZM18.4 17.47C18.9 16.37 19.22 15.17 19.34 13.9C19.34 13.84 19.34 13.78 19.34 13.72C19.34 13.62 19.34 13.51 19.34 13.41C19.18 13.41 19.07 13.41 18.96 13.41H9.6L12.01 18.23C14.93 18.23 17.23 18.02 18.4 17.47Z"
      fill="white"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FF0000"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12 9.545 15.568z"
    />
  </svg>
);

// Social links (replace href with actual URLs)
const socialLinks = [
  { Icon: FigmaIcon, href: "#", name: "Figma" },
  { Icon: LinkedInIcon, href: "#", name: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", name: "Instagram" },
  { Icon: GitHubIcon, href: "#", name: "GitHub" },
  { Icon: DribbbleIcon, href: "#", name: "Dribbble" },
  { Icon: YouTubeIcon, href: "#", name: "YouTube" },
];

// --- Component ---
const ContactMe = () => {
  return (
    <section
      id="contact"
      className="font-mono site-bg text-[color:var(--site-fg)] px-6 py-16 md:px-12 md:py-24 transition-colors duration-200"
      style={{
        // Local CSS vars (optional customization)
        "--contact-accent": "var(--site-fg)",
        "--contact-accent-sub":
          "color-mix(in srgb, var(--site-fg) 70%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="relative inline-block mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider">
            contact me
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-24 md:w-28 bg-[var(--contact-accent)]" />
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 sm:gap-10 md:gap-12 mb-16 md:mb-24">
          {socialLinks.map((entry) => (
            <a
              key={entry.name}
              href={entry.href}
              aria-label={`Visit my ${entry.name} profile`}
              className="group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--site-fg)]/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative">
                <entry.Icon />
                <span className="pointer-events-none absolute inset-0 rounded-full scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-300 bg-[color:var(--site-fg)]/10" />
              </div>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-[color:var(--site-fg)]/70 group-hover:text-[color:var(--site-fg)]">
                {entry.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
