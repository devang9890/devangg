import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { text: 'Initializing...', duration: 1000 },
      { text: 'Loading assets...', duration: 1500 },
      { text: 'Preparing portfolio...', duration: 1200 },
      { text: 'Almost ready...', duration: 800 },
      { text: 'Welcome!', duration: 500 }
    ];

    let currentStep = 0;
    const totalDuration = loadingSteps.reduce((sum, step) => sum + step.duration, 0);
    const progressInterval = totalDuration / 100;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Update loading text based on progress
        const stepProgress = (newProgress / 100) * totalDuration;
        let accumulatedTime = 0;
        
        for (let i = 0; i < loadingSteps.length; i++) {
          accumulatedTime += loadingSteps[i].duration;
          if (stepProgress <= accumulatedTime) {
            if (currentStep !== i) {
              currentStep = i;
              setLoadingText(loadingSteps[i].text);
            }
            break;
          }
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        {/* Animated logo/icon */}
        <motion.div
          className="loading-logo"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.h2
          className="loading-text"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {loadingText}
        </motion.h2>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="loading-particle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 