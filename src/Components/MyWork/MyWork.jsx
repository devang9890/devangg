import React, { useState, useMemo } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import { projectsData } from '../../assets/projectsData'

const MyWork = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const displayedProjects = useMemo(
    () => (showAllProjects ? projectsData : projectsData.slice(0, 6)),
    [showAllProjects]
  );

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const cardLeftVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardRightVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <LazyMotion features={domAnimation} strict>
    <section id='work' className='mywork'>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="mywork-content">
        {/* Header */}
        <m.div
          className="mywork-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="gradient-text">My Latest Work</h1>
          <p className="work-subtitle">Explore my recent projects showcasing full-stack development, AI/ML, and IoT solutions</p>
          <img src={theme_pattern} alt="Theme Pattern" loading="lazy" decoding="async" width="120" height="24" />
        </m.div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {/* Center Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Items */}
          {displayedProjects.map((work, index) => {
            const isCardLeft = index % 2 === 0;
            const itemKey = work.id ?? work.w_name ?? `work-${index}`;
            
            return (
              <m.div
                key={itemKey}
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Timeline Node - Absolutely positioned in center */}
                <m.div
                  className="timeline-node-wrapper"
                  variants={nodeVariants}
                >
                  <div className="node-outer-ring"></div>
                  <div className="node-inner"></div>
                  <div className="node-pulse"></div>
                </m.div>

                {/* 2-Column Grid */}
                <div className="timeline-grid">
                  {/* Left Column */}
                  <div className="timeline-column">
                    {isCardLeft ? (
                      <>
                        {/* Connector Line */}
                        <m.div
                          className="connector-line connector-to-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        ></m.div>
                        <ProjectCard work={work} variants={cardLeftVariants} />
                      </>
                    ) : (
                      <>
                        {/* Connector Line */}
                        <m.div
                          className="connector-line connector-to-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        ></m.div>
                        <TextDeck work={work} variants={cardRightVariants} />
                      </>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="timeline-column">
                    {isCardLeft ? (
                      <>
                        {/* Connector Line */}
                        <m.div
                          className="connector-line connector-to-right"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        ></m.div>
                        <TextDeck work={work} variants={cardRightVariants} />
                      </>
                    ) : (
                      <>
                        {/* Connector Line */}
                        <m.div
                          className="connector-line connector-to-right"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        ></m.div>
                        <ProjectCard work={work} variants={cardLeftVariants} />
                      </>
                    )}
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {projectsData.length > 6 && (
          <m.div
            className="mywork-showmore-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <m.button
              className="mywork-showmore"
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAllProjects ? 'Show Less Projects' : 'Show More Projects'}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ transform: showAllProjects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </m.button>
          </m.div>
        )}
      </div>
    </section>
    </LazyMotion>
  )
}

// Project Card Component
const ProjectCardComponent = ({ work, variants }) => {
  return (
    <m.div
      className="project-card-premium"
      variants={variants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glow Effect */}
      <div className="card-glow-premium"></div>

      {/* Image */}
      <div className="card-image-wrapper-premium">
        <img 
          src={work.image} 
          alt={work.title}
          className="card-image-premium"
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
        />
        <div className="image-overlay-premium"></div>
      </div>

      {/* Content */}
      <div className="card-content-premium">
        <h3 className="card-title-premium">{work.title}</h3>
        <p className="card-description-premium">{work.description}</p>

        {/* Action Buttons */}
        <div className="card-actions-premium">
          <m.a
            href={work.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn-premium btn-github-premium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Open GitHub for ${work.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </m.a>

          <m.a
            href={work.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn-premium btn-demo-premium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Open Live Demo for ${work.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Live Demo</span>
          </m.a>
        </div>
      </div>
    </m.div>
  );
};

// Text Deck Component (AI Summary Panel)
const TextDeckComponent = ({ work, variants }) => {
  // Dynamic tech stack from project data
  const techStack = work.techStack || ['React', 'Node.js', 'MongoDB', 'Tailwind'];
  const projectType = work.projectType || 'Full Stack';
  const completedYear = work.completedYear || '2024';
  const status = work.status || 'Live';
  const isLive = status === 'Live';
  
  return (
    <m.div
      className="text-deck-premium"
      variants={variants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated Background */}
      <div className="text-deck-bg-glow"></div>

      <div className="text-deck-content">
        {/* Tech Stack */}
        <div className="tech-stack-section">
          <div className="section-divider">
            <div className="divider-line"></div>
            <h5 className="section-title">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies
            </h5>
            <div className="divider-line"></div>
          </div>
          
          <div className="tech-chips">
            {techStack.map((tech, i) => (
              <m.div
                key={i}
                className="tech-chip"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="tech-chip-glow"></div>
                <span className="tech-chip-text">{tech}</span>
              </m.div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-section">
          {/* Project Type */}
          <m.div
            className="stat-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <div className="stat-card-glow stat-glow-cyan"></div>
            <div className="stat-icon stat-icon-cyan">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-info">
              <p className="stat-label">Project Type</p>
              <p className="stat-value">{projectType}</p>
            </div>
          </m.div>

          {/* Completion Year */}
          <m.div
            className="stat-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <div className="stat-card-glow stat-glow-purple"></div>
            <div className="stat-icon stat-icon-purple">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-info">
              <p className="stat-label">Completed</p>
              <p className="stat-value">{completedYear}</p>
            </div>
          </m.div>

          {/* Status */}
          <m.div
            className="stat-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <div className="stat-card-glow stat-glow-green"></div>
            <div className="stat-icon stat-icon-green">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-info-with-pulse">
              <div>
                <p className="stat-label">Status</p>
                <p className={`stat-value ${isLive ? 'stat-value-live' : 'stat-value-progress'}`}>{status}</p>
              </div>
              {isLive && (
                <m.div
                  className="status-pulse"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></m.div>
              )}
            </div>
          </m.div>
        </div>

        {/* Bottom Accent Line */}
        <m.div
          className="deck-accent-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        ></m.div>
      </div>
    </m.div>
  );
};

// Memoized components to avoid re-renders
const ProjectCard = React.memo(ProjectCardComponent);
ProjectCard.displayName = 'ProjectCard';
const TextDeck = React.memo(TextDeckComponent);
TextDeck.displayName = 'TextDeck';

export default MyWork
