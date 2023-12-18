import React from "react";
import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import data from "./data";
import { useState } from "react";
import "./portfolio.css";
export default function Portfolio() {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uiqueCategories = ["all", ...new Set(categories)];

  const filterProjects = (category) => {
    if (category === "all") {
      return setProjects(data);
    }
    const filterPro = data.filter((project) => project.category === category);
    setProjects(filterPro);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates
        ad culpa quidem illo tempore nisi incidunt nulla, temporibus accusamus.
      </p>
      <div className="container pt-container">
        <ProjectsCategories
          categories={uiqueCategories}
          onFilterProjects={filterProjects}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
}
