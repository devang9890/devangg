import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      {/* Animated background blobs */}
      <div className="footer-bg-blob footer-blob-1"></div>
      <div className="footer-bg-blob footer-blob-2"></div>

      <motion.div 
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="footer-top" variants={itemVariants}>
          <div className="footer-top-left">
            <img src={footer_logo} alt="Devang Singh" className="footer-logo" />
            <p>Full-Stack Developer building beautiful, scalable web applications. Always learning, always improving.</p>
            <div className="social-links">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="social-icon">LinkedIn</motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="social-icon">GitHub</motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="social-icon">Twitter</motion.a>
            </div>
          </div>

          <motion.div className="footer-top-right" variants={itemVariants}>
            <h3>Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="footer-email-input">
              <img src={user_icon} alt="email" />
              <input 
                type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button 
                type="submit" 
                className="footer-subscribe"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
            {subscribed && (
              <motion.p 
                className="subscribe-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Thanks for subscribing!
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="footer-divider" variants={itemVariants} />

        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-bottom-left">
            <p>© {currentYear} Devang Singh. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <motion.a 
              href="#" 
              whileHover={{ color: '#00eaff' }}
              transition={{ duration: 0.2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ color: '#00eaff' }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ color: '#00eaff' }}
              transition={{ duration: 0.2 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
