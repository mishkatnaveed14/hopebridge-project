import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { brand, footer, contact } from "../data/siteData.js";

const socialIcons = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <a href="#home" className="logo footer-logo">
            <span className="logo-icon" aria-hidden="true">
              <FaHeart />
            </span>
            {brand.logoText}
          </a>
          <p>{footer.about}</p>
          <div className="footer-socials">
            {footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
