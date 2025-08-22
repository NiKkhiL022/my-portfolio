import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";

function findProjectBySlug(slug) {
  if (!slug) return null;
  // Prefer matching by the last segment of the `link` field if present
  const fromLink = projectsData.find((p) => {
    if (!p.link) return false;
    const seg = p.link.split("/").filter(Boolean).pop();
    return seg === slug;
  });
  if (fromLink) return fromLink;

  // Fallbacks: numeric id or a slug from title
  const byId = projectsData.find((p) => String(p.id) === slug);
  if (byId) return byId;

  const norm = (s) =>
    (s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  return projectsData.find((p) => norm(p.title) === slug) || null;
}

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <section className="font-mono site-bg text-[color:var(--site-fg)] px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <p className="mb-6">Project not found.</p>
          <Link
            to="/projects"
            className="font-bold text-sm tracking-wider border-b-2 border-[color:var(--site-fg)] hover:border-[color:var(--site-fg)]/60"
          >
            ← back to projects
          </Link>
        </div>
      </section>
    );
  }

  const {
    title,
    subtitle,
    tags = [],
    imageUrl,
    banner,
    details = {},
  } = project;
  const {
    about = [],
    responsibilities = [],
    images = [],
    videos = [],
    blocks = [],
  } = details;

  return (
    <section className="font-mono site-bg text-[color:var(--site-fg)] px-6 py-12 md:px-12 md:py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <Link
              to="/projects"
              className="font-bold text-xs md:text-sm tracking-wider border-b-2 border-[color:var(--site-fg)] hover:border-[color:var(--site-fg)]/60"
            >
              ← back
            </Link>
          </div>
          {subtitle && (
            <p className="text-sm md:text-base text-[color:var(--site-fg)]/70 mt-2">
              {subtitle}
            </p>
          )}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-full bg-[color:var(--site-fg)]/10 text-[color:var(--site-fg)]/80"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hero Image */}
        {(banner || images[0] || imageUrl) && (
          <div className="mb-10">
            <img
              src={banner || images[0] || imageUrl}
              alt={title}
              className="w-full max-h-[640px] object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x520/cccccc/FFFFFF?text=Image+Error&font=monospace";
              }}
            />
          </div>
        )}

        {/* About */}
        {about.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div className="space-y-3 text-sm md:text-base text-[color:var(--site-fg)]/80">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {responsibilities.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[color:var(--site-fg)]/80">
              {responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Narrative blocks (preferred) or fallback gallery */}
        {blocks.length > 0 ? (
          <div className="mb-10 space-y-10">
            <h2 className="text-xl font-bold">Highlights</h2>
            {blocks.map((b, i) => {
              if (b.type === "text") {
                return (
                  <div
                    key={`b-text-${i}`}
                    className="bg-[color:var(--site-bg)] border border-[color:var(--site-fg)]/15 rounded-lg p-6"
                  >
                    {b.title && (
                      <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                    )}
                    {Array.isArray(b.body) ? (
                      <div className="space-y-2 text-[color:var(--site-fg)]/80 text-sm md:text-base">
                        {b.body.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[color:var(--site-fg)]/80 text-sm md:text-base">
                        {b.body}
                      </p>
                    )}
                  </div>
                );
              }
              if (b.type === "image") {
                return (
                  <figure key={`b-img-${i}`} className="space-y-3">
                    <img
                      src={b.src}
                      alt={b.alt || title}
                      className="w-full rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/1200x520/cccccc/FFFFFF?text=Image+Error&font=monospace";
                      }}
                    />
                    {(b.caption || b.note) && (
                      <figcaption className="text-xs md:text-sm text-[color:var(--site-fg)]/70">
                        {b.caption || b.note}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return null;
            })}
          </div>
        ) : (
          (images.length > 1 ||
            (images.length === 1 && images[0] !== (banner || imageUrl))) && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(banner ? images : images.slice(1)).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${title} ${i + 2}`}
                    className="w-full h-56 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Error&font=monospace";
                    }}
                  />
                ))}
              </div>
            </div>
          )
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <video key={i} src={v} controls className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default ProjectDetail;
