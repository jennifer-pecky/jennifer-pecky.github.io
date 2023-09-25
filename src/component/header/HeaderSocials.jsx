import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jennifer-chioma-maduagwu-7051ab236/"
        target="_blank"
        id="line"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://web.facebook.com/jennifer.chioma.7771/"
        target="_blank"
        id="line"
      >
        <BsGithub />
      </a>
      <a href="https://twitter.com/pecky_jennifer" target="_blank" id="line">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
