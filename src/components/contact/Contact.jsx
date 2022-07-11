import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bg1eblh",
        "template_3o174jn",
        form.current,
        "olwNzRlKMwOK-y3TQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">xchy3z405@outlook.com</h5>
            <a
              href="mailto:xchy3z405@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaSteam className="contact__option-icon" />
            <h4>Steam</h4>
            <h5 className="text-light">XIInyu</h5>
            <a
              href="https://steamcommunity.com/id/XIInyu"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5 className="text-light">+1-647-989-7792</h5>
            <a
              href="https://api.whatsapp.com/sned?phone+16479897792"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
