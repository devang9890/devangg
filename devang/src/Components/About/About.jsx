import React from 'react';
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

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={dhruv} alt="dhruv" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusantium eaque numquam quos odio ipsam deserunt ad suscipit optio cum, et temporibus perspiciatis nemo impedit quis eligendi perferendis autem excepturi!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae officiis deleniti vel nisi unde provident cupiditate veritatis in ab.</p>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <h3>Skills</h3>
        <div className="skills-sections">
          <div className="skills-section">
            <h4>Frontend Development</h4>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item" style={{'--skill-color': skill.color}}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section">
            <h4>Backend Development</h4>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item" style={{'--skill-color': skill.color}}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
