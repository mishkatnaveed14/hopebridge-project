import { useEffect, useState } from "react";
import {
  FaHandHoldingHeart,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { brand, navLinks, contact } from "../data/siteData.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <button
          className={`menu-backdrop ${menuOpen ? "is-visible" : ""}`}
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon" aria-hidden="true">
            <FaHandHoldingHeart />
          </span>
          <span className="logo-wordmark">
            {brand.logoText}
            <small>COMMUNITY FOUNDATION</small>
          </span>
        </a>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary nav-donate"
            href="#donate"
            onClick={closeMenu}
          >
            Donate Now
          </a>
        </nav>

        <div className="header-right">
          <a className="header-phone" href={contact.phoneHref}>
            <FaPhoneAlt aria-hidden="true" />
            <span>Help Line: {contact.phone}</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
