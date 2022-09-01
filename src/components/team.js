import React from "react";
import "./team.css";
import { team_data } from "../data/team_data";

export const Team = () => {
  return (
    <main className="team">
      <header className="team__header">
        <h2 className="team__title">Meet the Team</h2>
        <hr />
      </header>
      <section className="team__content">
        {team_data.map((exec) => (
          <article
            className="team__exec"
            key={exec.name}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <picture className="team__image">
              <img src={exec.image} alt={exec.name + ".jpg"} />
            </picture>
            <section className="team__info">
              <h3 className="team__name">{exec.name}</h3>
              <p className="team__position">{exec.position}</p>
              <p className="team__year">{exec.year}</p>
              <p className="team__role">{exec.role}</p>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
};
