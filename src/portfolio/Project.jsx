import React from "react";
import Card from "../components/Card";

export default function Project({ project }) {
  return (
    <div>
      <Card className="portfolio-project">
        <div className="portfolio-project-img">
          <img src={project.image} alt="Portfolio Project Image" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio-project-cta">
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.github}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </Card>
    </div>
  );
}
