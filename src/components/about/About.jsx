import React from "react";

import Me from "../../assets/me.jpg";

import { FaTrophy, FaUserCheck } from "react-icons/fa";
import { MdLibraryAddCheck,MdSchool } from "react-icons/md";


import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaTrophy className="about__icon" />
              <h5>Experience</h5>
              <small>3 Years overall Experience</small>
            </article>
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <small>Sheridan College - System Analyst</small>
            </article>
            <article className="about__card">
              <MdLibraryAddCheck className="about__icon" />
              <h5>Project</h5>
              <small>More projects on its way</small>
            </article>
          </div>

          <p>
            Yo, Whats up~ I graduated from Sheridan College at 2021 April, and since then, I've found my passion at becoming a full stack developer.
          </p>

          <a href="#contact" className="btn btn-primary">Contact Me!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
