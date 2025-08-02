import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import dhruv from '../../assets/dhruv.JPG';

const About = () => {
  const frontendSkills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: '⚫', color: '#000000' },
    { name: 'JavaScript', icon: '🟡', color: '#F7DF1E' },
    { name: 'TypeScript', icon: '🔵', color: '#3178C6' },
    { name: 'HTML5', icon: '🟠', color: '#E34F26' },
    { name: 'Tailwind CSS', icon: '🔷', color: '#06B6D4' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '⚪', color: '#000000' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'C++', icon: '🔷', color: '#00599C' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='about' className='about-section'>
      <div className="about-container">
        <motion.div 
          className="about-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="gradient-text">About me</h1>
          <img src={theme_pattern} alt="Theme Pattern" />
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-profile" variants={itemVariants}>
            <div className="profile-container glass">
              <img src={dhruv} alt="Devang Singh" />
              <div className="profile-glow"></div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-description glass">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusantium eaque numquam quos odio ipsam deserunt ad suscipit optio cum, et temporibus perspiciatis nemo impedit quis eligendi perferendis autem excepturi!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae officiis deleniti vel nisi unde provident cupiditate veritatis in ab.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="about-skills"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="gradient-text">Skills</h3>
          <div className="skills-sections">
            <motion.div 
              className="skills-section glass"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>Frontend Development</h4>
              <div className="skills-grid">
                {frontendSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="skill-item" 
                    style={{'--skill-color': skill.color}}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="skills-section glass"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>Backend Development</h4>
              <div className="skills-grid">
                {backendSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="skill-item" 
                    style={{'--skill-color': skill.color}}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="about-achievements glass"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="about-achievement"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="gradient-text">1+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </motion.div>
          <hr />
          <motion.div 
            className="about-achievement"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="gradient-text">20+</h1>
            <p>PROJECTS COMPLETED</p>
          </motion.div>
          <hr />
          <motion.div 
            className="about-achievement"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="gradient-text">10+</h1>
            <p>HAPPY CLIENTS</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
