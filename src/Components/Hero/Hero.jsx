import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import dhruv from "../../assets/dhruv.jpg";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">

        {/* PROFILE IMAGE */}
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
        >
          <div className="profile-glow" />
          <img src={dhruv} alt="Devang Singh" className="hero-img" />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span>Devang Singh</span>
          </h1>

          <h2 className="hero-role">
            Full-Stack Developer • MERN • UI/UX Focused
          </h2>

          <p className="hero-desc">
            I design and build high-performance web applications with modern
            technologies, clean architecture, and stunning user experiences.
            Passionate about crafting products people love to use.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <AnchorLink href="#contact" className="btn-primary">
              Let's Work Together
            </AnchorLink>

            <a
              href={resume}
              download="Devang_Singh_Resume.pdf"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
