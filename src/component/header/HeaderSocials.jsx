import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="http://linkedin.com" target="_blank" id='line'><BsLinkedin /></a>
            <a href="http://facebook.com" target="_blank" id='line'><BsGithub /></a>
            <a href="http://twitter.com" target="_blank" id='line'><FaTwitter /></a>
        </div>
    )
}

export default HeaderSocials