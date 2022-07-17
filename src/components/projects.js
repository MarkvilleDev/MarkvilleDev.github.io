import React from "react";
import "./projects.css";

import { projects_data } from "../data/projects_data";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h2 className="projects__title">Projects</h2>
        <hr />
      </div>
      <div className="projects__content">
        {projects_data
          ? projects_data.map((project) => (
              <div className="project" key={project.name}>
                <div className="project__info">
                  <h3
                    className="project__name"
                    style={{ color: project.colors.primary }}
                  >
                    {project.name}
                  </h3>
                  <p className="project__date">{project.date}</p>
                  <h4 className="project__subtitle">{project.subtitle}</h4>
                  <p className="project__description">{project.description}</p>
                  <ul>
                    {["apple", "google", "github", "website"].map(
                      (platform) =>
                        project[platform] && (
                          <li key={platform}>
                            <div className="button">
                              <a
                                href={project[platform]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project__link"
                              >
                                {platform.charAt(0).toUpperCase() +
                                  platform.slice(1)}
                              </a>
                            </div>
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div className="project__image">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    style={{
                      boxShadow: `0 0 26px ${project.colors.primary}`,
                    }}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
