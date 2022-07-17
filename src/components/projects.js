import React from "react";
import "./projects.css";

import { projects_data } from "../data/projects_data";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h1 className="projects__title">
          <span className="projects__title--primary">Projects</span>
        </h1>
        <p className="projects__subtitle">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="projects__content">
        {projects_data
          ? projects_data.map((project) => (
              <div className="project" key={project.name}>
                <div className="project__info">
                  <h3 className="project__name">{project.name}</h3>
                  <p className="project__date">{project.date}</p>
                  <p className="project__description">{project.description}</p>
                  <ul>
                    {project.apple && (
                      <li>
                        <a
                          href={project.apple}
                          target="__blank"
                          rel="noopener noreferrer"
                          className="project__link"
                        >
                          App Store
                        </a>
                      </li>
                    )}
                    {project.google && (
                      <li>
                        <a
                          href={project.google}
                          target="__blank"
                          rel="noopener noreferrer"
                          className="project__link"
                        >
                          Play Store
                        </a>
                      </li>
                    )}
                    {project.github && (
                      <li>
                        <a
                          href={project.github}
                          target="__blank"
                          rel="noopener noreferrer"
                          className="project__link"
                        >
                          Github
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="project__image">
                  <img src={project.image.src} alt={project.image.alt} />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
