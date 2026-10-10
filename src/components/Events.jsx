import { FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { events } from "../data/siteData.js";

export default function Events() {
  return (
    <section className="section events" id="events">
      <div className="container">
        <div className="section-head center">
          <p className="kicker">{events.kicker}</p>
          <h2>{events.title}</h2>
        </div>
        <div className="card-grid three stagger-grid">
          {events.items.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-image">
                <img src={event.image} alt={event.alt} width="1024" height="768" loading="lazy" />
              </div>
              <div className="event-body">
                <p className="event-organizer">
                  <FaUser aria-hidden="true" /> {event.organizer}
                </p>
                <h3>{event.title}</h3>
                <ul className="event-meta">
                  <li>
                    <FaClock aria-hidden="true" /> Time: {event.time}
                  </li>
                  <li>
                    <FaMapMarkerAlt aria-hidden="true" /> Location: {event.location}
                  </li>
                </ul>
                <a className="btn btn-primary btn-sm" href="#donate">
                  {events.buttonLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
