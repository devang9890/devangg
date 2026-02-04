import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate progress: quick start, then slower
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          // Faster at the start, slower as it approaches 100
          const increment = prev < 50 ? Math.random() * 15 : Math.random() * 5;
          return Math.min(prev + increment, 100);
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  // When progress reaches 100%, wait a moment then complete
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 800);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle grain overlay */}
      <div className="loading-grain" />

      <div className="loading-container">
        {/* Minimal logo / initials */}
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="loading-initials">WELCOME</div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="loading-progress-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Thin line progress */}
          <div className="loading-progress-container">
            <motion.div
              className="loading-progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
            />
          </div>
          
          {/* Percentage text */}
          <div className="loading-percentage">
            <motion.span
              key={Math.floor(progress)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>
        </motion.div>

        {/* Status text */}
        <motion.div
          className="loading-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Initializing portfolio</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
