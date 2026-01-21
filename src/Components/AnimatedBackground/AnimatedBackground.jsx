import React from 'react';
import { createPortal } from 'react-dom';
import './AnimatedBackground.css';

/**
 * Shooting Stars Animated Background Component
 * Features:
 * - Subtle shooting stars animation
 * - Professional dark theme (#050814)
 * - Low motion, smooth animations
 * - Respects prefers-reduced-motion for accessibility
 * - Zero performance overhead with pure CSS animations
 * - Global coverage: position fixed, z-index 0, pointer-events none
 */
const AnimatedBackground = () => {
  const content = (
    <div className="animated-background">
      {/* Dark base with gradient */}
      <div className="bg-base" />

      {/* Animated Orbs - Premium Floating Spheres */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="orb orb-5" />
      <div className="orb orb-6" />
      <div className="orb orb-7" />
      <div className="orb orb-8" />

      {/* Accent Particles for premium feel */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />

      {/* Glow layers for depth */}
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
      <div className="glow glow-4" />
      <div className="glow glow-5" />

      {/* Animated mesh overlay for premium effect */}
      <div className="mesh-overlay" />

      {/* Dark overlay for readability */}
      <div className="overlay" />

      {/* Subtle grain/noise texture */}
      <div className="grain" />
    </div>
  );

  // Render into body to avoid any ancestor stacking/transform effects
  return createPortal(content, document.body);
};

export default AnimatedBackground; 