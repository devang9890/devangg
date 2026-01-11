import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>

      {/* Desktop links */}
      <div className="nav-links">
        {links.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
            <span>{item}</span>
            <span>{item}</span>
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="nav-actions">
        <button className="btn-glow">Contact</button>
        {/* <button className="btn-glow">Connect</button> */}
      </div>

      {/* Mobile toggle */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn-glow">Contact</button>
          <button className="btn-glow">Connect</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
