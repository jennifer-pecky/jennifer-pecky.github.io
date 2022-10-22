import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { ImTwitter } from 'react-icons/im'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer__logo'>PECKY</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="http://facebook.com"><BsFacebook /></a>
                <a href="http://whatsapp.com"><RiWhatsappFill /></a>
                <a href="http://twitter.com"><ImTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Pecky's Portfolio. All rightd reserved</small>
            </div>
        </footer>
    )
}

export default Footer