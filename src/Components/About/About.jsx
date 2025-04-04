import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Aspiring Computer Science professional with a passion for coding, problem-solving, and technology.</p>
                        <p>Eager to explore innovative solutions and build impactful projects. Constantly learning and growing in the world of software development.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width: "50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{width: "70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p>
                            <hr style={{width: "50%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About