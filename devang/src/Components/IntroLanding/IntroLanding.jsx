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
        // Hold for 500ms, then fade out and show DEVANG SINGH
        setTimeout(() => {
          setWelcomeComplete(true);
          setTimeout(() => {
            setShowDevang(true);
          }, 500);
        }, 500);
      }
    }, 60); // Fast typing

    return () => clearInterval(welcomeInterval);
  }, []);

  // STEP 2: Type out DEVANG SINGH (after WELCOME fades)
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
        // After DEVANG SINGH types, fade in subtitle
        setTimeout(() => {
          setShowSubtitle(true);
        }, 400);
      }
    }, 85); // Slightly slower typing

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

      {/* Subtle Noise Overlay */}
      <div className="intro-noise-overlay" />

      {/* Floating Particles with Blue Tones */}
      <div className="intro-particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="intro-particle"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="intro-content-wrapper">
        {/* STEP 1: WELCOME Text (fades out) */}
        <motion.div
          className="intro-step-welcome"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: welcomeComplete ? 0 : 1,
            y: welcomeComplete ? 20 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-welcome-text">
            {welcomeTyped}
            {!welcomeComplete && (
              <motion.span
                className="intro-cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </h1>
        </motion.div>

        {/* STEP 2: DEVANG SINGH Text (main focus) */}
        <motion.div
          className="intro-step-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showDevang ? 1 : 0, y: showDevang ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-name-text">
            {devangTyped}
            {showDevang && !devangComplete && (
              <motion.span
                className="intro-cursor-name"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </h1>
        </motion.div>

        {/* STEP 3: Subtitle (fades in after name) */}
        <motion.div
          className="intro-step-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 10 }}
          transition={{ duration: 0.8 }}
        >
          <p className="intro-subtitle-text">Full Stack Web Developer</p>
        </motion.div>

        {/* STEP 3B: Bio Text (fades in after subtitle) */}
        <motion.div
          className="intro-step-bio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showBio ? 1 : 0, y: showBio ? 0 : 10 }}
          transition={{ duration: 0.8 }}
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
          transition={{ duration: 0.8 }}
        >
          <button className="intro-btn intro-btn-enter" onClick={handleEnter}>
            ENTER //
          </button>
          <button className="intro-btn intro-btn-exit" onClick={handleExit}>
            EXIT //
          </button>
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
