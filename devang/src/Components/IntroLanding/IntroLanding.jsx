import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IntroLanding.css';

const IntroLanding = ({ onEnter }) => {
  // Animation sequence states
  const [welcomeTyped, setWelcomeTyped] = useState('');
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  const [showDevang, setShowDevang] = useState(false);
  const [devangTyped, setDevangTyped] = useState('');
  const [devangComplete, setDevangComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const welcomeText = 'WELCOME';
  const devangText = 'DEVANG SINGH';

  // STEP 1: Type out WELCOME
  useEffect(() => {
    let currentIndex = 0;
    const welcomeInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setWelcomeTyped(welcomeText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(welcomeInterval);
        setTimeout(() => {
          setWelcomeComplete(true);
          setTimeout(() => {
            setShowDevang(true);
          }, 500);
        }, 500);
      }
    }, 70);

    return () => clearInterval(welcomeInterval);
  }, []);

  // STEP 2: Type out DEVANG SINGH
  useEffect(() => {
    if (!showDevang) return;

    let currentIndex = 0;
    const devangInterval = setInterval(() => {
      if (currentIndex <= devangText.length) {
        setDevangTyped(devangText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(devangInterval);
        setDevangComplete(true);
        setTimeout(() => {
          setShowSubtitle(true);
        }, 400);
      }
    }, 90);

    return () => clearInterval(devangInterval);
  }, [showDevang]);

  // STEP 3: Fade in subtitle, then bio
  useEffect(() => {
    if (!showSubtitle) return;

    const bioTimer = setTimeout(() => {
      setShowBio(true);
    }, 600);

    return () => clearTimeout(bioTimer);
  }, [showSubtitle]);

  // STEP 4: Fade in CTAs (after bio appears)
  useEffect(() => {
    if (!showBio) return;

    const ctaTimer = setTimeout(() => {
      setShowCTA(true);
    }, 400);

    return () => clearTimeout(ctaTimer);
  }, [showBio]);

  // Handle ENTER button click
  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 800);
  };

  // Handle EXIT button click
  const handleExit = () => {
    window.close();
  };

  return (
    <motion.div
      className="intro-landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: isExiting ? 0.8 : 0.8 }}
    >
      {/* Animated Blue Background */}
      <div className="intro-bg-animated" />

      {/* Glow Effects */}
      <div className="intro-glow intro-glow-1" />
      <div className="intro-glow intro-glow-2" />
      <div className="intro-glow intro-glow-3" />

      {/* Animated Grid */}
      <div className="intro-grid-bg" />

      {/* Floating Particles with Blue Tones */}
      <div className="intro-particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="intro-particle"
            animate={{
              y: [Math.random() * 100, Math.random() * 100 - 200],
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="intro-content-wrapper">
        {/* STEP 1: WELCOME Text (fades out) */}
        <motion.div
          className="intro-step-welcome"
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: welcomeComplete ? 0 : 1,
            y: welcomeComplete ? 30 : 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="intro-welcome-text">
            {welcomeTyped}
            {!welcomeComplete && (
              <motion.span
                className="intro-cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                _
              </motion.span>
            )}
          </h2>
        </motion.div>

        {/* STEP 2: DEVANG SINGH Text (main focus) */}
        <motion.div
          className="intro-step-name"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: showDevang ? 1 : 0, 
            y: showDevang ? 0 : 30,
            scale: showDevang ? 1 : 0.9
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="intro-name-text">
            {devangTyped}
            {showDevang && !devangComplete && (
              <motion.span
                className="intro-cursor-name"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                _
              </motion.span>
            )}
          </h1>
        </motion.div>

        {/* STEP 3: Subtitle (fades in after name) */}
        <motion.div
          className="intro-step-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="intro-subtitle-text">Full Stack Web Developer</p>
        </motion.div>

        {/* STEP 3B: Bio Text (fades in after subtitle) */}
        <motion.div
          className="intro-step-bio"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: showBio ? 1 : 0, y: showBio ? 0 : 15 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="intro-bio-text">
            Building elegant digital experiences with React, JavaScript & modern web technologies
          </p>
        </motion.div>

        {/* STEP 4: CTA Buttons (fade in together) */}
        <motion.div
          className="intro-step-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.button 
            className="intro-btn intro-btn-enter" 
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ENTER //
          </motion.button>
          <motion.button 
            className="intro-btn intro-btn-exit" 
            onClick={handleExit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            EXIT //
          </motion.button>
        </motion.div>
      </div>

      {/* Exit Overlay */}
      {isExiting && (
        <motion.div
          className="intro-exit-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.div>
  );
};

export default IntroLanding;
