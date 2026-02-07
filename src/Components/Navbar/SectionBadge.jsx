import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SectionBadge.css';

const SectionBadge = ({ activeSection, show }) => {
  const getSectionLabel = (section) => {
    const labels = {
      'home': 'Home',
      'about': 'About',
      'services': 'Services',
      'work': 'Projects',
      'contact': 'Contact'
    };
    return labels[section] || section;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        >
          <motion.div
            key={activeSection}
            className="badge-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="badge-dot"></span>
            <span className="badge-label">{getSectionLabel(activeSection)}</span>
          </motion.div>
          <div className="badge-glow"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionBadge;
