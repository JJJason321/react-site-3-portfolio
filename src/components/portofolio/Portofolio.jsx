import React from "react";
import "./portofolio.css";

import Bitcoin from "../../assets/trade.jpg";
import Travel from '../../assets/travel.jpg';
import RealEstate from '../../assets/realestate.jpg';
import Dashboard from '../../assets/dashboard.png';

const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="demo_Pic" src={Dashboard} alt="" />
          </div>
          <h3>Synfusion Dashboard</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JJJason321/react-site-4-Dashboard-syncfusion" target='_blank' rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://react-site-4-dashboard-syncfusion.vercel.app/" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="demo_Pic" src={Bitcoin} alt="" />
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
              href="https://nextjs-site-1.vercel.app/" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="demo_Pic" src={RealEstate} alt="" />
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
              href="https://react-site-2-eight.vercel.app/" target='_blank' rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="demo_Pic" src={Travel} alt="" />
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
              href="https://react-site-1-rho.vercel.app/" target='_blank' rel="noreferrer"
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
