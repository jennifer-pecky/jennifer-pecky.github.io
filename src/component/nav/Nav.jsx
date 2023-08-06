import React from 'react';
import './nav.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { BiBookAlt } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdMessage } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiTwotoneHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <HiUser />
      </a>
      {/* <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookAlt />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdMessage />
      </a>
      <a
        href="#footer"
        onClick={() => setActiveNav('#footer')}
        className={activeNav === '#footer' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
    </nav>
  );
};

export default Navbar;
