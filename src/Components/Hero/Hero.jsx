import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Souradip Manna,</span> a fullstack developer</h1>
            <p>I am a motivated and detail-oriented Computer Science student skilled in Python, JavaScript, React, Web Development.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero