import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { projectsData } from "../data/projects";

// Reusable component for each project card
export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 group border border-[color:var(--site-fg)]/10 hover:border-[color:var(--site-fg)]/20 transition-colors duration-200 p-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-[color:var(--site-bg)]/95 rounded-lg transition-all duration-200 group-hover:bg-[color:var(--site-bg)]">
        <img
          src={project.banner || project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-contain rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Error&font=monospace";
          }}
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-[color:var(--site-fg)]/10 text-[color:var(--site-fg)]/80 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-[var(--site-fg)] mb-2">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-lg text-[color:var(--site-fg)]/60 font-normal mb-4">
            {project.subtitle}
          </p>
        )}
        <div className="text-sm text-[color:var(--site-fg)]/80 space-y-4 mb-6 line-clamp-4">
          {project.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        {project.link ? (
          <Link
            to={project.link}
            className="font-bold text-sm tracking-wider self-start border-b-2 border-[color:var(--site-fg)] hover:border-[color:var(--site-fg)]/60 transition-colors duration-200"
          >
            More details →
          </Link>
        ) : (
          <button
            type="button"
            className="font-bold text-sm tracking-wider self-start border-b-2 border-[color:var(--site-fg)]/40 text-[color:var(--site-fg)]/60 cursor-not-allowed"
            disabled
            title="No details link provided"
          >
            More details →
          </button>
        )}
      </div>
    </div>
  );
};

// Main Projects component
const Projects = ({ limit, showMoreButton = false }) => {
  const items =
    typeof limit === "number" ? projectsData.slice(0, limit) : projectsData;
  const location = useLocation();
  const isFullPage = location.pathname === "/projects";

  return (
    <section className="font-mono site-bg p-8 md:p-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-end justify-between mb-12 gap-6">
          {isFullPage ? (
            <Link
              to="/"
              className="font-bold text-xs md:text-sm tracking-wider border-b-2 border-[color:var(--site-fg)] hover:border-[color:var(--site-fg)]/60"
              aria-label="Back to home"
            >
              ← home
            </Link>
          ) : (
            <span />
          )}
          <div className="relative ml-auto">
            <h2 className="text-3xl font-bold tracking-wider">projects</h2>
            <div className="absolute right-0 -bottom-2 h-1.5 w-24 bg-[var(--site-fg)]"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 mb-16">
          {items.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {showMoreButton && (
          <div className="text-center">
            <ShowMoreButton />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

// Small internal component to programmatically navigate to /projects
function ShowMoreButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/projects")}
      className="font-bold text-sm tracking-wider border-b-2 border-[color:var(--site-fg)] hover:border-[color:var(--site-fg)]/60 inline-block transition-colors duration-200"
      aria-label="Show more projects"
    >
      show more projects →
    </button>
  );
}
