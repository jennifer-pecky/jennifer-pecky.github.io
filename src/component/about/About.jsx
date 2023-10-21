import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-xl">Get To Know</h5>
      <h2 className="text-xl">About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className="text-sm md:text-lg mb-3 text-gray-500 dark:text-gray-400 p-6 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            Hey there! I'm Jennifer Chioma, a front-end developer dedicated to
            creating captivating online experiences. I'm passionate about
            crafting user-friendly designs that are visually stunning and highly
            functional. I've worked on a variety of projects, from e-commerce to
            educational platforms. Web development's ever-changing landscape
            keeps me excited to learn and grow. <br /> When I'm not coding, I
            enjoy video games and various hobbies like hiking and cooking. Let's
            work together to bring your digital dreams to life, whether it's a
            stunning website or a problem-solving web app. Thanks for stopping
            by – let's embark on this coding adventure together!"
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
