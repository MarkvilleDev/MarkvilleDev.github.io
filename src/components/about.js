import React from "react";
import "./about.css";
import { AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const About = () => {
  return (
    <div className="about">
      <div
        className="about__header"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="about__title">About the Club</h2>
      </div>
      <div
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
      </div>
      <div
        className="about__footer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <a
          href="https://github.com/MarkvilleAppDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={40} className="about__social" />
        </a>
      </div>
    </div>
  );
};
