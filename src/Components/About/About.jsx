import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import dhruv from '../../assets/dhruv.jpg';
import TechIcons from '../../utils/TechIcons';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const frontendSkills = [
    { name: 'React', icon: TechIcons.React, color: '#61DAFB', level: 90 },
    { name: 'Next.js', icon: TechIcons["Next.js"], color: '#ffffff', level: 80 },
    { name: 'JavaScript', icon: TechIcons.JavaScript, color: '#F7DF1E', level: 90 },
    { name: 'TypeScript', icon: TechIcons.TypeScript, color: '#3178C6', level: 75 },
    { name: 'HTML5', icon: TechIcons.HTML5, color: '#E34F26', level: 95 },
    { name: 'Tailwind CSS', icon: TechIcons["Tailwind CSS"], color: '#06B6D4', level: 85 }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: TechIcons["Node.js"], color: '#339933', level: 85 },
    { name: 'Express.js', icon: TechIcons["Express.js"], color: '#ffffff', level: 80 },
    { name: 'Python', icon: TechIcons.Python, color: '#3776AB', level: 85 },
    { name: 'Java', icon: TechIcons.Java, color: '#ED8B00', level: 70 },
    { name: 'C++', icon: TechIcons["C++"], color: '#00599C', level: 75 }
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: TechIcons.MongoDB, color: '#47A248', level: 85 },
    { name: 'MySQL', icon: TechIcons.MySQL, color: '#4479A1', level: 75 },
    { name: 'Supabase', icon: TechIcons.Supabase, color: '#3ECF8E', level: 70 }
  ];

  const mlSkills = [
    { name: 'NumPy', icon: TechIcons.NumPy, color: '#013243', level: 75 },
    { name: 'Pandas', icon: TechIcons.Pandas, color: '#150458', level: 75 },
    { name: 'Matplotlib', icon: TechIcons.Matplotlib, color: '#11557C', level: 70 },
    { name: 'Seaborn', icon: TechIcons.Seaborn, color: '#4C72B0', level: 65 },
    { name: 'Scikit-Learn', icon: TechIcons["Scikit-Learn"], color: '#F7931E', level: 65 }
  ];

  const devTools = [
    { name: 'Git', icon: TechIcons.Git, color: '#F05032', level: 85 },
    { name: 'GitHub', icon: TechIcons.GitHub, color: '#ffffff', level: 90 },
    { name: 'Firebase', icon: TechIcons.Firebase, color: '#FFCA28', level: 75 }
  ];

  const skillCategories = [
    { title: 'Frontend Development', skills: frontendSkills, accent: '#00eaff' },
    { title: 'Backend Development', skills: backendSkills, accent: '#a855f7' },
    { title: 'Databases', skills: databaseSkills, accent: '#3ECF8E' },
    { title: 'Data Science & ML', skills: mlSkills, accent: '#F7931E' },
    { title: 'Developer Tools', skills: devTools, accent: '#ff4ecd' },
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

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.08,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // SVG circle progress
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

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
              <p>
                Hi, I'm Devang 👋 — a B.Tech CSE student at Bhagwan Parshuram Institute of Technology (GGSIPU).
                I love turning ideas into real-world applications through Web Development and sharpening my
                problem-solving skills with DSA. Whether it's crafting smooth user experiences or optimizing
                algorithms, I enjoy learning, experimenting, and building projects that make a difference.!
              </p>
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
          <h3 className="gradient-text">Tech Stack</h3>
          <p className="skills-subtitle">Technologies I work with</p>

          <div className="skills-sections">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skills-section glass"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ '--section-accent': category.accent }}
              >
                <div className="section-header">
                  <div className="section-accent-line" style={{ background: category.accent }}></div>
                  <h4>{category.title}</h4>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => {
                    const skillId = `${catIndex}-${index}`;
                    const offset = circumference - (skill.level / 100) * circumference;
                    return (
                      <motion.div
                        key={index}
                        className="skill-item"
                        style={{ '--skill-color': skill.color }}
                        custom={index}
                        variants={skillCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, y: -8 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredSkill(skillId)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className="skill-icon-wrapper">
                          {/* Progress ring */}
                          <svg className="skill-progress-ring" viewBox="0 0 64 64">
                            <circle
                              className="skill-progress-bg"
                              cx="32"
                              cy="32"
                              r={radius}
                              strokeWidth="2.5"
                            />
                            <motion.circle
                              className="skill-progress-fill"
                              cx="32"
                              cy="32"
                              r={radius}
                              strokeWidth="2.5"
                              style={{
                                stroke: skill.color,
                                strokeDasharray: circumference,
                              }}
                              initial={{ strokeDashoffset: circumference }}
                              whileInView={{ strokeDashoffset: offset }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            />
                          </svg>
                          <skill.icon className="skill-svg-icon" />

                          {/* Glow effect */}
                          <div
                            className="skill-glow"
                            style={{ background: `radial-gradient(circle, ${skill.color}30 0%, transparent 70%)` }}
                          ></div>
                        </div>

                        <span className="skill-name">{skill.name}</span>

                        {/* Proficiency tooltip */}
                        <AnimatePresence>
                          {hoveredSkill === skillId && (
                            <motion.div
                              className="skill-tooltip"
                              initial={{ opacity: 0, y: 8, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              style={{ borderColor: `${skill.color}60` }}
                            >
                              <span className="tooltip-level" style={{ color: skill.color }}>{skill.level}%</span>
                              <span className="tooltip-label">Proficiency</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
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
        </motion.div>

      </div>
    </section>
  );
}

export default About;
