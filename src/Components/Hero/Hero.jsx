import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import dhruv from "../../assets/dhruv.jpg";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile */}
        <motion.div
          className="hero-profile"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="profile-ring" />
          <img src={dhruv} alt="Devang Singh" className="hero-img" />
          <div className="profile-glow"></div>
        </motion.div>

        {/* Text - Centered Name */}
        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-name">Devang Singh</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Full-Stack Developer & B.Tech CSE Student
        </motion.p>

        <motion.p className="hero-desc" variants={itemVariants}>
          I build clean, scalable web applications with modern technologies and
          strong focus on UI, performance, and usability. Let's create
          something amazing together.
        </motion.p>

        {/* Actions */}
        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-wrapper"
          >
            <AnchorLink href="#contact" className="btn-primary">
              Connect With Me
            </AnchorLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-wrapper"
          >
            <a
              href={resume}
              className="btn-secondary"
              download="Devang_Singh_Resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <span></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;