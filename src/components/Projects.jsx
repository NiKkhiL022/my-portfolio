import React from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

// Reusable component for each project card
export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 group">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-[color:var(--site-bg)]/95 rounded-lg transition-all duration-200 group-hover:bg-[color:var(--site-bg)]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
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
              className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
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
          <p className="text-lg text-gray-500 font-normal mb-4">
            {project.subtitle}
          </p>
        )}
        <div className="text-sm text-gray-600 space-y-4 mb-6">
          {project.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <a
          href="#"
          className="font-bold text-sm tracking-wider self-start border-b-2 border-[var(--site-fg)] hover:border-gray-600 transition-colors duration-200"
        >
          see project →
        </a>
      </div>
    </div>
  );
};

// Main Projects component
const Projects = ({ limit, showMoreButton = false }) => {
  const items =
    typeof limit === "number" ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="font-mono site-bg p-8 md:p-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex justify-end mb-12">
          <div className="relative">
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
      className="font-bold text-sm tracking-wider border-b-2 border-black dark:border-white hover:border-gray-600 dark:hover:border-gray-300 inline-block transition-colors duration-200"
      aria-label="Show more projects"
    >
      show more projects →
    </button>
  );
}
