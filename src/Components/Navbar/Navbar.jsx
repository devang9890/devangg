import React, { useState } from "react";
import "./Navbar.css";
import SectionBadge from "./SectionBadge";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useActiveSection } from "../../hooks/useActiveSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const activeSection = useActiveSection(['home', 'about', 'services', 'work', 'contact']);

  const links = ["Home", "About", "Services", "Projects", "Contact"];
  
  // Determine if we should hide the navbar
  const shouldHideNavbar = scrollDirection === 'down' && !isAtTop;
  
  // Show floating elements when navbar is hidden
  const showFloatingElements = shouldHideNavbar;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Section Badge - Shows current section when scrolled */}
      <SectionBadge activeSection={activeSection} show={showFloatingElements} />

      {/* Main Navbar - Hides on scroll down */}
      <nav className={`navbar navbar-top ${shouldHideNavbar ? "navbar-hidden" : "navbar-visible"}`}>
        <div className="nav-logo">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
        </div>

        <div className="nav-links">
          {links.map((item) => {
            const sectionId = item === "Projects" ? "work" : item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <span className="link-text">{item}</span>
                <span className="link-glow"></span>
              </a>
            );
          })}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn-contact">
            <span className="btn-gradient"></span>
            <span className="btn-text">Let's Talk</span>
          </a>
        </div>
      </nav>

      {/* Floating Hamburger - Shows when navbar is hidden */}
      <button
        className={`floating-hamburger ${showFloatingElements || isMenuOpen ? "show" : ""} ${isMenuOpen ? "menu-open" : ""}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="menu-glow"></span>
      </button>

      {/* Slide-in Sidebar Menu - Premium Design */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span className="menu-title">Navigation</span>
        </div>
        <div className="menu-links">
          {links.map((item, index) => {
            const sectionId = item === "Projects" ? "work" : item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`menu-link ${isActive ? "active" : ""}`}
                onClick={handleLinkClick}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="link-number">0{index + 1}</span>
                <span className="link-label">{item}</span>
              </a>
            );
          })}
        </div>
        <a 
          href="#contact" 
          className="btn-menu-cta" 
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="btn-shine"></span>
          <span className="btn-text">Start a Project</span>
        </a>
      </div>

      {/* Dark overlay behind menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;