import React from 'react'
import './About.css'
import ME from '../../images/me1.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFolderFill } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <BsFolderFill className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>



                    <p>
                        I am a  front-end developer, I have developed a strong understanding of the necessary skills and abilities. I am proficient in HTML, CSS javascript. and react

                        <br /> I'm a motivated and hard-working individual who is always looking for new challenges. I am also excited to learn and grow as a developer and  I am confident that I can be a valuable asset..
                    </p>
                    <br />

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About
