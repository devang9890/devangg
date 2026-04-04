import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pfp from "../../assets/pfp.jpg";
import resume from "../../assets/resume.pdf";
import "./Hero.css";

// ─── Constants ────────────────────────────────────────────────────────────────
const SUBTITLES = [
  "Full-Stack Developer",
  "MERN Specialist",
  "UI/UX Enthusiast",
  "Performance Architect",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Typing / word-switch subtitle */
function AnimatedSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SUBTITLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-subtitle-wrapper">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hero-subtitle-text"
        >
          {SUBTITLES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/** Magnetic button wrapper */
function MagneticButton({ children, className, onClick, style, href, download, as: Component }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = Component === "a" ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      style={{ x: springX, y: springY, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={className}
      href={href}
      download={download}
    >
      {children}
    </MotionTag>
  );
}

/** Scroll indicator */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="hero-scroll-indicator"
    >
      <span className="hero-scroll-label">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="hero-scroll-line"
      />
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="hero-scroll-dot"
      />
    </motion.div>
  );
}

// ─── Stagger helper ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

// ─── Main Export ──────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Ambient mesh blobs */}
      <div className="hero-blobs">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="hero-inner">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-profile"
        >
          {/* Outer glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="profile-ring"
          >
            <div className="profile-ring-inner" />
          </motion.div>

          {/* Radial glow behind image */}
          <div className="profile-glow" />

          {/* Profile image — static, no filters */}
          <div className="profile-img-container">
            <img
              src={pfp}
              alt="Devang Singh"
              className="hero-img"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div {...fadeUp(0.45)} className="hero-heading">
          <h1 className="hero-title">
            <span className="hero-title-prefix">Hi, I'm </span>
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="hero-title-name"
            >
              Devang Singh
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle word-switch */}
        <motion.div {...fadeUp(0.6)} className="hero-subtitle">
          <AnimatedSubtitle />
        </motion.div>

        {/* Separator dots */}
        <motion.div {...fadeUp(0.65)} className="hero-dots">
          {["#22d3ee", "#a855f7", "#34d399"].map((c, i) => (
            <span
              key={i}
              className="hero-dot"
              style={{ background: c, boxShadow: `0 0 6px ${c}` }}
            />
          ))}
        </motion.div>

        {/* Description */}
        <motion.p {...fadeUp(0.72)} className="hero-desc">
          I design and build high-performance web applications with modern
          technologies, clean architecture, and stunning user experiences.
          Passionate about crafting products people love to use.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hero-buttons"
        >
          {/* Primary */}
          <AnchorLink href="#contact" className="hero-link-reset">
            <MagneticButton className="btn-primary group">
              <motion.span className="btn-primary-hover" />
              <span className="btn-primary-content">
                Let's Work Together
                <svg
                  className="btn-arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </MagneticButton>
          </AnchorLink>

          {/* Secondary */}
          <MagneticButton
            as="a"
            href={resume}
            download="Devang_Singh_Resume.pdf"
            className="btn-outline group"
          >
            <motion.span className="btn-outline-hover" />
            <span className="btn-outline-content">
              <svg
                className="btn-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </span>
          </MagneticButton>
        </motion.div>

        {/* Glowing divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-divider"
        >
          <div className="hero-divider-line" />
          <div className="hero-divider-glow" />
        </motion.div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
