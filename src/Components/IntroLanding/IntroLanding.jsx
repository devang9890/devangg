import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroLanding.css';

const IntroLanding = ({ onEnter }) => {
  // ==================== STAGE STATES ====================
  const [stage, setStage] = useState(0); // 0: boot, 1: welcome, 2: name, 3: content, 4: cta
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Stage 0: Boot sequence
  const [bootLines, setBootLines] = useState([]);
  const bootTexts = ['Initializing system...', 'Loading modules...', 'Connecting...'];
  
  // Stage 1: Welcome typing
  const [welcomeTyped, setWelcomeTyped] = useState('');
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  
  // Stage 2: Name typing
  const [nameTyped, setNameTyped] = useState('');
  const [nameComplete, setNameComplete] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  
  // Stage 3: Content reveal
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  
  // Stage 4: CTA
  const [showCTA, setShowCTA] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Auto-enter timer
  const autoEnterTimeoutRef = useRef(null);
  
  const welcomeText = 'WELCOME';
  // Use non-breaking space to prevent word splitting during character animation
  const nameText = 'DEVANG\u00A0SINGH'; // \u00A0 = non-breaking space

  // ==================== STAGE 0: SYSTEM BOOT (0s → 1s) ====================
  useEffect(() => {
    let bootIndex = 0;
    const bootInterval = setInterval(() => {
      if (bootIndex < bootTexts.length) {
        setBootLines((prev) => [...prev, bootTexts[bootIndex]]);
        bootIndex++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setStage(1), 300);
      }
    }, 250);

    // Loading progress bar
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => {
      clearInterval(bootInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // ==================== STAGE 1: WELCOME TYPING (1s → 2.5s) ====================
  useEffect(() => {
    if (stage !== 1) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= welcomeText.length) {
        setWelcomeTyped(welcomeText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setWelcomeComplete(true);
        setTimeout(() => setStage(2), 1200);
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, [stage]);

  // ==================== STAGE 2: NAME TYPING (2.5s → 4.5s) ====================
  useEffect(() => {
    if (stage !== 2) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= nameText.length) {
        setNameTyped(nameText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setNameComplete(true);
        setTimeout(() => {
          setShowUnderline(true);
          setTimeout(() => setStage(3), 800);
        }, 600);
      }
    }, 220);

    return () => clearInterval(typingInterval);
  }, [stage]);

  // ==================== STAGE 3: CONTENT REVEAL (4.5s → 6s) ====================
  useEffect(() => {
    if (stage !== 3) return;

    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 400);
    const bioTimer = setTimeout(() => setShowBio(true), 900);
    const badgeTimer = setTimeout(() => setShowBadge(true), 1400);
    const nextStageTimer = setTimeout(() => setStage(4), 2200);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(bioTimer);
      clearTimeout(badgeTimer);
      clearTimeout(nextStageTimer);
    };
  }, [stage]);

  // ==================== STAGE 4: CTA BUTTONS (6s → 7s) ====================
  useEffect(() => {
    if (stage !== 4) return;

    const ctaTimer = setTimeout(() => setShowCTA(true), 200);

    // Auto-enter after 7 seconds total (give 7s from initial load)
    autoEnterTimeoutRef.current = setTimeout(() => {
      if (!isExiting) {
        handleEnter();
      }
    }, 15000); // 15s auto-enter

    return () => {
      clearTimeout(ctaTimer);
      if (autoEnterTimeoutRef.current) {
        clearTimeout(autoEnterTimeoutRef.current);
      }
    };
  }, [stage]);

  // ==================== HANDLERS ====================
  const handleEnter = () => {
    if (autoEnterTimeoutRef.current) {
      clearTimeout(autoEnterTimeoutRef.current);
    }
    setIsExiting(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 1000);
  };

  const handleExit = () => {
    if (autoEnterTimeoutRef.current) {
      clearTimeout(autoEnterTimeoutRef.current);
    }
    window.close();
  };

  // ==================== RENDER ====================
  return (
    <motion.div
      className="intro-landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1, filter: isExiting ? 'blur(20px)' : 'blur(0px)' }}
      transition={{ duration: isExiting ? 1 : 0.5 }}
    >
      {/* ========== BACKGROUND LAYERS ========== */}
      {/* Animated Gradient Background */}
      <div className="intro-bg-gradient" />

      {/* Noise Overlay */}
      <div className="intro-noise-overlay" />

      {/* Grid with Perspective */}
      <div className="intro-grid-container">
        <div className="intro-grid-perspective" />
      </div>

      {/* Scanner Beam */}
      <motion.div
        className="intro-scanner-beam"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2,
        }}
      />

      {/* Floating Particles (Enhanced) */}
      <div className="intro-particles-container">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="intro-particle"
            animate={{
              y: [Math.random() * 100, Math.random() * 100 - 300],
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
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

      {/* Glitch Lines */}
      <motion.div
        className="intro-glitch-line"
        animate={{
          y: ['0%', '100%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear',
        }}
      />

      {/* ========== STAGE 0: BOOT SEQUENCE ========== */}
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            className="intro-boot-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Terminal Lines */}
            <div className="intro-boot-terminal">
              {bootLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="intro-boot-line"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: [0, 1, 0.8, 1], x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="intro-boot-prompt">{'>'}</span> {line}
                </motion.div>
              ))}
            </div>

            {/* Loading Bar */}
            <div className="intro-loading-bar-container">
              <div className="intro-loading-bar-bg">
                <motion.div
                  className="intro-loading-bar-fill"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="intro-loading-percentage">{loadingProgress}%</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== MAIN CONTENT CONTAINER ========== */}
      <div className="intro-content-wrapper">
        
        {/* ========== STAGE 1: WELCOME TEXT ========== */}
        <AnimatePresence>
          {stage >= 1 && !welcomeComplete && (
            <motion.div
              className="intro-welcome-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="intro-welcome-text">
                {welcomeTyped.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="intro-letter"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    {char}
                  </motion.span>
                ))}
                {!welcomeComplete && (
                  <motion.span
                    className="intro-cursor"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                )}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========== STAGE 2: NAME TEXT ========== */}
        {stage >= 2 && (
          <motion.div
            className="intro-name-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Neon Pulse Background */}
            <motion.div
              className="intro-neon-pulse"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Circular Loader Ring */}
            <motion.svg
              className="intro-circular-loader"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: nameComplete ? 0 : 0.6, rotate: 360 }}
              transition={{ rotate: { duration: 2, repeat: Infinity, ease: 'linear' } }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="70 200"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#9d4edd" />
                </linearGradient>
              </defs>
            </motion.svg>

            <h1 className="intro-name-text">
              {/* Split text into characters for animation */}
              {/* Spaces are preserved as non-breaking spaces (\u00A0) to prevent word breaking */}
              {nameTyped.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className={`intro-letter-name ${index % 3 === 0 ? 'intro-glitch-letter' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
              {stage === 2 && !nameComplete && (
                <motion.span
                  className="intro-cursor-name"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  _
                </motion.span>
              )}
            </h1>

            {/* Neon Underline Animation */}
            {showUnderline && (
              <motion.div
                className="intro-neon-underline"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            )}
          </motion.div>
        )}

        {/* ========== STAGE 3: SUBTITLE + BIO + BADGE ========== */}
        {stage >= 3 && (
          <>
            {/* Subtitle */}
            <motion.div
              className="intro-subtitle-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="intro-subtitle-text">Full Stack Web Developer</p>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="intro-bio-container"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: showBio ? 1 : 0, y: showBio ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="intro-bio-text">
                Building elegant digital experiences with React, JavaScript & modern web technologies
              </p>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              className="intro-badge-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: showBadge ? 1 : 0, scale: showBadge ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="intro-status-badge"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 212, 255, 0.3)',
                    '0 0 20px rgba(0, 212, 255, 0.6)',
                    '0 0 10px rgba(0, 212, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="intro-badge-icon">⚡</span>
                <span className="intro-badge-text">AVAILABLE FOR PROJECTS</span>
              </motion.div>
            </motion.div>
          </>
        )}

        {/* ========== STAGE 4: CTA BUTTONS ========== */}
        {stage >= 4 && (
          <motion.div
            className="intro-cta-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="intro-btn intro-btn-enter"
              onClick={handleEnter}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="intro-btn-shine" />
              <span className="intro-btn-text">ENTER //</span>
            </motion.button>

            <motion.button
              className="intro-btn intro-btn-exit"
              onClick={handleExit}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(157, 78, 221, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="intro-btn-shine" />
              <span className="intro-btn-text">EXIT //</span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Exit Overlay */}
      {isExiting && (
        <motion.div
          className="intro-exit-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default IntroLanding;
