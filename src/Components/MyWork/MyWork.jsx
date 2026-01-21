import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const displayedProjects = showAllProjects ? mywork_data : mywork_data.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='work' className='mywork'>
      <div className="mywork-content">
        <motion.div
          className="mywork-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="gradient-text">My Latest Work</h1>
          <p className="work-subtitle">Explore my recent projects showcasing full-stack development, AI/ML, and IoT solutions</p>
          <img src={theme_pattern} alt="Theme Pattern" />
        </motion.div>

        <motion.div
          className="mywork-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((work, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div className="card-glow"></div>

              {/* Project Image with Overlay */}
              <div className="project-image-wrapper">
                <motion.img
                  src={work.w_img}
                  alt={work.w_name}
                  className="project-image"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="overlay-title">{work.w_name}</h3>
                  <div className="overlay-buttons">
                    <motion.a
                      href={work.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>GitHub</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={work.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-name">{work.w_name}</h3>
                <p className="project-description">{work.w_desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {mywork_data.length > 6 && (
          <motion.div
            className="mywork-showmore-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="mywork-showmore"
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAllProjects ? 'Show Less Projects' : 'Show More Projects'}</span>
              <motion.img
                src={arrow_icon}
                alt="arrow"
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="show-more-arrow"
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default MyWork
