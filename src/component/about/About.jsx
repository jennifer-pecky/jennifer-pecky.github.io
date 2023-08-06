import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h5 className="text-xl">Get To Know</h5>
      <h2 className="text-xl">About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className="text-sm md:text-lg mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            Hey there! I'm Jennifer Chioma, a front-end developer who's all
            about crafting awesome online experiences. I really believe every
            pixel on a screen can tell a story, and I'm on a mission to make
            that happen with my code. My journey into web development started
            when I stumbled onto HTML and CSS. It was like magic, and from just
            being curious, I got totally hooked on creating user-friendly
            designs that look great and work smoothly. As time went on, I got
            really good at making slick, responsive designs that not only look
            cool but also make users' lives easier. I've been lucky to work on
            all sorts of projects with different teams – everything from online
            stores and entertainment sites to educational platforms. What's
            super cool about web development is that it's always changing. Every
            day there's something new to learn, a fresh challenge to tackle,
            some new tech to dive into. It's this constant learning that keeps
            me super excited and always ready to improve. When I'm not glued to
            my code editor, you'll often find me diving into video games.
            There's just something amazing about exploring virtual worlds and
            getting lost in those stories. And when I'm not gaming, you might
            catch me [hiking, cooking up a storm in the kitchen, strumming on a
            guitar – whatever your other hobbies are]. Let's team up and make
            your digital dreams real. Whether you're after a website that wows
            or a smooth web app that solves real problems, I'm here and ready to
            turn your ideas into something awesome. Thanks a bunch for stopping
            by – can't wait to start this coding adventure together!
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
