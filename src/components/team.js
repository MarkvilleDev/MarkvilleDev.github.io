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
      <section className="team__2023">
        <h3>2022-2023</h3>
        <div className="team__2023-role">
          <h4>Leads</h4>
          <ul>
            {team_data["2023"].leads.map((lead) => (
              <li>{lead}</li>
            ))}
          </ul>
        </div>
        <div className="team__2023-role">
          <h4>Senior Trainers</h4>
          <ul>
            {team_data["2023"].senior.map((senior) => (
              <li>{senior}</li>
            ))}
          </ul>
        </div>
        <div className="team__2023-role">
          <h4>Junior Trainers</h4>
          <ul>
            {team_data["2023"].junior.map((junior) => (
              <li>{junior}</li>
            ))}
          </ul>
        </div>
      </section>
      <h3>2020-2022</h3>
      <section className="team__content">
        {team_data["2022"].map((exec) => (
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
