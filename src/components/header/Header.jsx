import React from "react";

import CTA from "./CTA";

import Me from "../../assets/me.jpg";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Feader = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Xinyu Feng</h1>
        <h5 className="text-light">Fullstack Developer Beginner</h5>
        <CTA />

        <div className="wrapper">
          <HeaderSocials />

          <div className="me">
            <img src={Me} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Feader;
