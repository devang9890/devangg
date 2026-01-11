import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);
  const [twinklingStars, setTwinklingStars] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    const createTwinklingStars = () => {
      const newTwinklingStars = [];
      // Increased number of twinkling stars from 30 to 80
      for (let i = 0; i < 80; i++) {
        newTwinklingStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1, // Slightly larger stars
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 2, // Varied duration for more natural effect
        });
      }
      setTwinklingStars(newTwinklingStars);
    };

    createParticles();
    createTwinklingStars();
    
    window.addEventListener('resize', () => {
      createParticles();
      createTwinklingStars();
    });
    
    return () => window.removeEventListener('resize', () => {});
  }, []);

  return (
    <div className="animated-background">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.3, 0.3, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Twinkling stars - increased count and improved animation */}
      {twinklingStars.map((star) => (
        <motion.div
          key={`twinkling-${star.id}`}
          className="twinkling-star"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-orb orb-3"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 