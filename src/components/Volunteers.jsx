import { volunteers } from "../data/siteData.js";

export default function Volunteers() {
  return (
    <section className="section volunteers" id="volunteers">
      <div className="container">
        <div className="section-head split">
          <div>
            <p className="kicker">{volunteers.kicker}</p>
            <h2>{volunteers.title}</h2>
          </div>
          <a className="btn btn-outline" href={volunteers.button.href}>
            {volunteers.button.label}
          </a>
        </div>
        <div className="card-grid three stagger-grid">
          {volunteers.members.map((member, index) => (
            <article className="volunteer-card" key={member.name}>
              <div className="volunteer-photo">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  width="768"
                  height="768"
                  loading="lazy"
                />
                <span className="volunteer-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="volunteer-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
