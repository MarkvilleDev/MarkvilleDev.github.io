import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title--primary">
            Markville App Development Club
          </span>
        </h1>
        <p className="hero__subtitle">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
