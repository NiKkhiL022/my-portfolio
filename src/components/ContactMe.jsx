import React from "react";

// --- SVG Icons (brand or adaptive) ---
const baseIconClass =
  "w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-200";

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

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={baseIconClass + " fill-[color:var(--site-fg)]"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12C0 17.294 3.438 21.813 8.205 23.385C8.806 23.493 9.023 23.111 9.023 22.779C9.023 22.478 9.012 21.54 9.007 20.465C5.531 21.233 4.852 18.79 4.852 18.79C4.305 17.452 3.54 17.11 3.54 17.11C2.448 16.34 3.622 16.355 3.622 16.355C4.834 16.441 5.438 17.623 5.438 17.623C6.522 19.467 8.284 18.944 8.942 18.643C9.046 17.882 9.349 17.36 9.673 17.068C7.054 16.779 4.302 15.758 4.302 11.2C4.302 9.948 4.757 8.91 5.466 8.11C5.346 7.821 4.973 6.784 5.588 5.097C5.588 5.097 6.61 4.772 8.962 6.318C9.942 6.045 10.99 5.912 12.032 5.908C13.075 5.912 14.123 6.045 15.103 6.318C17.454 4.772 18.474 5.097 18.474 5.097C19.09 6.784 18.717 7.821 18.597 8.11C19.306 8.91 19.759 9.948 19.759 11.2C19.759 15.768 17.003 16.779 14.382 17.068C14.782 17.435 15.149 18.148 15.149 19.183C15.149 20.688 15.136 21.888 15.136 22.25C15.136 22.589 15.345 22.964 15.943 22.852C20.562 21.305 24 16.795 24 12C24 5.373 18.627 0 12 0Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className={baseIconClass}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#25D366"
      d="M16.003 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.35.612 4.637 1.776 6.653L2.667 29.333l6.884-1.748a13.27 13.27 0 0 0 6.452 1.648h.001c7.364 0 13.333-5.969 13.333-13.333 0-3.563-1.387-6.914-3.908-9.435A13.26 13.26 0 0 0 16.003 2.667Zm0 24c-2.07 0-4.095-.546-5.866-1.582l-.42-.249-4.085 1.036 1.09-3.976-.273-.408A11.265 11.265 0 0 1 4.67 16c0-6.205 5.128-11.333 11.333-11.333 3.025 0 5.867 1.178 8.001 3.312A11.26 11.26 0 0 1 27.337 16c0 6.205-5.128 11.333-11.333 11.333Zm6.182-8.45c-.337-.169-2.002-.988-2.313-1.101-.311-.113-.538-.169-.764.169-.226.338-.875 1.101-1.073 1.327-.198.226-.396.254-.733.085-.338-.169-1.428-.526-2.72-1.679-1.006-.898-1.683-2.007-1.881-2.345-.198-.338-.021-.521.148-.69.152-.152.338-.396.507-.594.169-.198.226-.338.338-.564.113-.226.056-.423-.028-.592-.085-.169-.764-1.843-1.046-2.523-.276-.663-.557-.572-.764-.581-.198-.008-.423-.01-.649-.01s-.592.084-.903.423c-.311.338-1.187 1.16-1.187 2.83 0 1.67 1.215 3.284 1.384 3.511.169.226 2.395 3.659 5.81 5.128.812.35 1.445.559 1.938.716.813.259 1.553.222 2.138.135.652-.097 2.002-.817 2.285-1.607.282-.79.282-1.466.197-1.606-.084-.141-.31-.226-.647-.395Z"
    />
  </svg>
);

// Social links (replace href with actual URLs)
const socialLinks = [
  {
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/nikhil-gattadi-0640081b9/?trk=public-profile-join-page",
    name: "LinkedIn",
  },
  { Icon: GitHubIcon, href: "https://github.com/NiKkhiL022", name: "GitHub" },
  // Replace YOURNUMBER with your full international number, e.g., 15551234567
  {
    Icon: WhatsAppIcon,
    href: "https://wa.me/9491463566",
    name: "WhatsApp",
  },
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
        <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-10 md:gap-12 mb-16 md:mb-24">
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
