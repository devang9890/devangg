import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar - Default State */}
      <nav className={`navbar navbar-top ${isScrolled ? "navbar-hidden" : "navbar-visible"}`}>
        <div className="nav-logo">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        <div className="nav-links">
          {links.map((item) => (
            <a
              key={item}
              href={item === "Projects" ? "#work" : `#${item.toLowerCase()}`}
              className="nav-link"
            >
              <span>{item}</span>
              <span>{item}</span>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn-glow">Contact</a>
        </div>
      </nav>

      {/* Dots Toggle - Top Right (visible when scrolled or menu open; always on mobile) */}
      <button
        className={`dots-toggle ${isScrolled || isMenuOpen ? "show" : ""} ${isMenuOpen ? "dots-open" : ""}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Slide-in Sidebar Menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-links">
          {links.map((item) => (
            <a
              key={item}
              href={item === "Projects" ? "#work" : `#${item.toLowerCase()}`}
              className="menu-link"
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-glow menu-cta" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>

      {/* Dark overlay behind menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;