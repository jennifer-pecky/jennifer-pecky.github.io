import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../images/mgg.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container text-xl">
        <h5>Hello I'm</h5>
        <h1>Maduagwu Jennifer Chioma</h1>
        <h5 className="text-light">Front-end developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
