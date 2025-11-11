import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import dhruv from '../../assets/dhruv.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const profileVariants = {
    hidden: { scale: 0.5, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  }

  const rotatingBg = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  return (
    <section id='home' className='hero-section'>
      {/* Animated background elements */}
      <motion.div className="hero-bg-decoration bg-decoration-1" variants={rotatingBg} animate="animate" />
      <motion.div className="hero-bg-decoration bg-decoration-2" variants={rotatingBg} animate="animate" />
      
      <div className="hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content-wrapper"
        >
          {/* Profile Section */}
          <motion.div
            variants={profileVariants}
            className="hero-profile"
          >
            <div className="profile-image-container">
              <motion.div
                className="profile-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img src={dhruv} alt="Devang Singh" className="hero-profile-img" />
              <div className="profile-glow"></div>
              <div className="profile-shine"></div>
            </div>
          </motion.div>

          {/* Title Section */}
          <motion.div variants={itemVariants} className="hero-text-wrapper">
            <motion.h1 
              className="hero-title gradient-text"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="highlight">Devang</span>
              <motion.span 
                className="wave-emoji"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            FullStack Developer & B.Tech CSE Student from India
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Crafting digital experiences with modern web technologies. Passionate about building scalable applications and solving complex problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.div 
              className="hero-connect glass"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <span>Connect With Me</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="arrow-icon"
                >
                  →
                </motion.span>
              </AnchorLink>
            </motion.div>
            
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-resume glass"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Download Resume</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="arrow-icon"
              >
                ↓
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll to explore</span>
            <div className="scroll-arrow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero