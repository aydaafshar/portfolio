import React from "react";
import Project from "./Project";

export default function Projects({ projects }) {
  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
