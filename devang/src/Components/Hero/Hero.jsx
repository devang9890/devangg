import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import dhruv from '../../assets/dhruv.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <section id='home' className='hero-section'>
      <div className="hero-container">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="hero-profile"
        >
          <div className="profile-image-container">
            <img src={dhruv} alt="Devang Singh" className="hero-profile-img" />
            <div className="profile-glow"></div>
          </div>
        </motion.div>

        <motion.h1 
          className="hero-title gradient-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm <span className="highlight">Devang Singh</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          FullStack Developer & B.Tech CSE Student from India
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.div 
            className="hero-connect glass"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              Connect With Me
            </AnchorLink>
          </motion.div>
          
          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-resume glass"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
