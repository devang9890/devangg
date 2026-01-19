import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import dhruv from "../../assets/dhruv.jpg";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Profile */}
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="profile-ring" />
          <img src={dhruv} alt="Devang Singh" className="hero-img" />
        </motion.div>

        {/* Text */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="gradient-name">Devang Singh</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full-Stack Developer & B.Tech CSE Student from India
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build clean, scalable web applications with modern technologies and
          strong focus on UI, performance, and usability.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <AnchorLink href="#contact" className="btn-glow">
            Connect With Me
          </AnchorLink>

          <a
            href={resume}
            className="btn-outline"
            download="Devang_Singh_Resume.pdf"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
