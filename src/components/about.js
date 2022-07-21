import React from "react";
import "./about.css";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const About = () => {
  return (
    <section className="about">
      <header
        className="about__header"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="about__title">About the Club</h2>
      </header>
      <section
        className="about__content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="about__description">
          Here at Markville's App Development Club, we provide students with a
          unique opportunity to apply their programming skills and be part of a
          team to create a real-world project.
        </p>
        <p className="about__description">
          Students learn how to use various app development tools, from
          designing in Figma to coding in Flutter or React Native. We walk
          students through the development process step-by-step, from setting up
          a development environment to registering a Google Play Console or
          Apple Developer account.
        </p>
      </section>
      <footer
        className="about__footer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="tooltip">
          <span
            className="tooltip__text"
            style={{ width: "260px", "margin-left": "-130px" }}
          >
            markvilleappdevelopment@gmail.com
          </span>
          <a
            href="mailto:markvilleappdevelopment@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={40} className="about__social" />
          </a>
        </div>
        <div className="tooltip">
          <span
            className="tooltip__text"
            style={{ width: "120px", "margin-left": "-60px" }}
          >
            MarkvilleAppDev
          </span>
          <a
            href="https://github.com/MarkvilleAppDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={40} className="about__social" />
          </a>
        </div>
      </footer>
    </section>
  );
};
