import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusantium eaque numquam quos odio ipsam deserunt ad suscipit optio cum, et temporibus perspiciatis nemo impedit quis eligendi perferendis autem excepturi!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae officiis deleniti vel nisi unde provident cupiditate veritatis in ab.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>FrontEnd Development</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Backend Development</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS Development</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
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
