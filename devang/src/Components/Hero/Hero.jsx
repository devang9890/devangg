import React from 'react'
import './Hero.css'
import dhruv from '../../assets/dhruv.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

    
    return (
        <div id='home' className='hero'>
            <img src={dhruv} alt="Devang Singh" className="hero-profile-img" />
            <h1><span>I'm Devang Singh</span> </h1>
            <p>I'm  a FullStack Developer from India and A Btech CSE Student</p>
            <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume">My Resume</a>
            </div>
        </div>
    )
}

export default Hero
