import React from "react";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects_data } from "../data/projects_data";
import useWindowSize from "../hooks/useWindowDimensions";

AOS.init();

export const Projects = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="projects">
      <div className="projects__header">
        <h2 className="projects__title">Projects</h2>
        <hr />
      </div>
      <div className="projects__content">
        {projects_data
          ? projects_data.map((project, index) => (
              <div
                className="project"
                key={project.name}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div
                  className="project__info"
                  data-aos={width > 890 ? "fade-right" : "fade-up"}
                  data-aos-duration="1000"
                >
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
                    {[
                      ["apple", "App Store"],
                      ["google", "Play Store"],
                      ["github", "Github"],
                      ["website", "Website"],
                    ].map(
                      (platform) =>
                        project[platform[0]] && (
                          <li key={platform[0]}>
                            <div className="button">
                              <a
                                href={project[platform[0]]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project__link"
                              >
                                {platform[1]}
                              </a>
                            </div>
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div
                  className="project__image"
                  data-aos={width > 890 ? "fade-left" : "fade-up"}
                  data-aos-duration="1000"
                >
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    style={{
                      boxShadow: `0 0 26px ${project.colors.primary}`,
                    }}
                  />
                </div>
                {width < 891 && index < projects_data.length - 1 && (
                  <hr data-aos="fade-up" data-aos-duration="1000" />
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
