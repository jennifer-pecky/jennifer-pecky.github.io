import React from 'react';
import './contact.css';
import { HiMail } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uh4k4gm',
      'template_ns1pajd',
      form.current,
      'upYp6yJ4Wee5EDLvd'
    );

    e.target.reset;
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ugwojennifer7@gmail.com</h5>
            <a href="mailto:ugwojennifer7@gmail.com" target="_blank">
              Send a Msessage
            </a>
          </article>

          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>My Twitterhandle</h5>
            <a href="https://twitter.com/Pecky___" target="_blank">
              Send a Msessage
            </a>
          </article>

          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>linkedin</h4>
            <h5>Lets connect</h5>
            <a
              href="https://www.linkedin.com/in/jennifer-chioma-maduagwu-7051ab236/"
              target="_blank"
            >
              Send a Msessage
            </a>
          </article>
        </div>
        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            message=""
            id=""
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            onSubmit={sendEmail}
            className="btn btn-primary"
          >
            Send messaage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
