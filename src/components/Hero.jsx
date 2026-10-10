import { FaHeart } from "react-icons/fa";
import { hero, contact } from "../data/siteData.js";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-subtitle hero-animate">
            <FaHeart aria-hidden="true" /> {hero.subtitle}
          </p>
          <h1 className="hero-title hero-animate">{hero.title}</h1>
          <p className="hero-text hero-animate">{hero.text}</p>
          <div className="hero-actions hero-animate">
            <a className="btn btn-primary" href={hero.primaryButton.href}>
              {hero.primaryButton.label}
            </a>
            <a className="btn btn-outline" href={contact.phoneHref}>
              Help Line: {contact.phone}
            </a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width="1024"
              height="1280"
            />
          </div>
          <div className="hero-impact-note">
            <span className="hero-impact-icon" aria-hidden="true">
              <FaHeart />
            </span>
            <span>
              <strong>Hope in action</strong>
              <small>Community-led. Life-changing.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
