import React from "react";
import "./portofolio.css";

import Bitcoin from "../../assets/trade.jpg";
import Travel from '../../assets/travel.jpg';
import RealEstate from '../../assets/realestate.jpg';

const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Bitcoin} alt="" />
          </div>
          <h3>Crypto tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JJJason321/nextjs-site-1" target='_blank' rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/JJJason321/nextjs-site-1" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RealEstate} alt="" />
          </div>
          <h3>Real Estate Showcase</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JJJason321/react-site-2" target='_blank' rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/JJJason321/react-site-2" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Travel} alt="" />
          </div>
          <h3>Trip Advisor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JJJason321/react-site-1" target='_blank' rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/JJJason321/react-site-1" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
