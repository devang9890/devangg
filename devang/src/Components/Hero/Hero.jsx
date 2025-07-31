import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'


const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Devang Singh</span> </h1>
            <p>I'm  a FullStack Developer from India and A Btech CSE Student</p>
            <div className='hero-action'>
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
