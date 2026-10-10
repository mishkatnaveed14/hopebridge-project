import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { about } from "../data/siteData.js";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-image">
          <img src={about.image} alt={about.imageAlt} width="1024" height="768" loading="lazy" />
        </div>
        <div className="about-content">
          <div className="section-head">
            <p className="kicker">{about.kicker}</p>
            <h2>{about.title}</h2>
          </div>
          <p className="section-text">{about.text}</p>
          <ul className="about-facts">
            <li>
              <FaCalendarAlt aria-hidden="true" />
              <div>
                <h3>{about.dateLabel}:</h3>
                <p>{about.dateValue}</p>
              </div>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <div>
                <h3>{about.locationLabel}:</h3>
                <p>{about.locationValue}</p>
              </div>
            </li>
          </ul>
          <a className="btn btn-primary" href={about.button.href}>
            {about.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
