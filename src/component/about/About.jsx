import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-xl">Get To Know</h5>
      <h2 className="text-xl">About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className="text-sm md:text-lg mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            "Hey there! I'm Jennifer Chioma, a front-end developer passionate
            about creating captivating online experiences. I believe that every
            pixel on a screen narrates a story, and I'm on a mission to bring
            those stories to life through my code. My journey into web
            development began with a fascination for HTML and CSS, and I quickly
            became engrossed in crafting user-friendly designs that are both
            visually stunning and highly functional. Over time, I honed my
            skills in developing sleek, responsive designs that enhance not only
            aesthetics but also user convenience. I've had the privilege of
            collaborating on diverse projects with various teams, ranging from
            e-commerce and entertainment websites to educational platforms. What
            excites me about web development is its ever-evolving nature. Each
            day presents new opportunities to learn, fresh challenges to
            conquer, and innovative technologies to explore. This perpetual
            learning journey keeps me enthusiastic and consistently eager to
            enhance my expertise
          </p>
          <div className="flex justify-center mt-10">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
