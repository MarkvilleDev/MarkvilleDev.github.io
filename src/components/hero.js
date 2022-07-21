import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero__title">Markville App Development Club</h1>
      <AnimateText text="011011010110000101110010011010110111011001101001011011000110110001100101011000010111000001110000011001000110010101110110011001010110110001101111011100000110110101100101011011100111010001100011011011000111010101100010011011010110000101110010011010110111011001101001011011000110110001100101011000010111000001110000011001000110010101110110011001010110110001101111011100000110110101100101011011100111010001100011011011000111010101100010" />
      <p className="hero__subtitle">Yep.</p>
    </header>
  );
};

const AnimateText = ({ text }) => {
  return (
    <div className="binary-animation">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            opacity: (index % 4) / 10 + 0.1,
            "animation-delay": -0.7 - index / 7 + "s",
          }}
          className="binary__char"
        >
          {char}
        </span>
      ))}
    </div>
  );
};
