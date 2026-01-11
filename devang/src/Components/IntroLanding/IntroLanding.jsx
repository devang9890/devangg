import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IntroLanding.css';

const IntroLanding = ({ onEnter, onExit }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Handle Enter action
  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 600);
  };

  // Handle Exit action
  const handleExit = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (onExit) {
        onExit();
      } else {
        // Fallback: close window or redirect
        window.close() || (window.location.href = 'about:blank');
      }
    }, 400);
  };

  return (
    <motion.div
      className="intro-landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Background Image */}
      <div className="intro-bg-image" />

      {/* Noise Grain Overlay */}
      <div className="intro-noise-overlay" />

      {/* Floating Dust Particles */}
      <div className="intro-dust-container">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="dust-particle"
            animate={{
              y: [0, 20, -10, 15, 0],
              x: [0, 10, -5, 8, 0],
              opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="intro-content-wrapper">
        {/* Title Strip - Translucent */}
        <motion.div
          className="intro-title-strip"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="intro-handwritten-title">Devang Singh</h1>
        </motion.div>

        {/* Main Content Card - Glass Panel */}
        <motion.div
          className="intro-content-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          {/* Subtitle */}
          <div className="intro-subtitle">
            <span>FULL STACK WEB DEVELOPER</span>
          </div>

          {/* Description */}
          <p className="intro-description">
            Hello, I'm Devang Singh — a passionate developer crafting beautiful, 
            functional digital experiences with modern web technologies.
          </p>

          {/* CTA Section */}
          <div className={`intro-cta-section ${isLoading ? 'loading' : ''}`}>
            <motion.button
              className="intro-cta-button intro-enter"
              onClick={handleEnter}
              disabled={isLoading}
              whileHover={{ letterSpacing: '0.15em' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span>ENTER</span>
              <span className="cta-slash">//</span>
            </motion.button>

            <div className="intro-cta-divider" />

            <motion.button
              className="intro-cta-button intro-exit"
              onClick={handleExit}
              disabled={isLoading}
              whileHover={{ letterSpacing: '0.12em' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span>EXIT</span>
              <span className="cta-slash">//</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Loading Fade Overlay */}
      {isLoading && (
        <motion.div
          className="intro-exit-fade"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  );
};

export default IntroLanding;
