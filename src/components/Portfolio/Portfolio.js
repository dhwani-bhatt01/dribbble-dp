import React from "react";
import "./Portfolio.css";
import pImg from "../../images/portfolio11-img.png";

function Portfolio() {
  return (
    <div className="portfolio container">
      <div className="portfolio-img">
        <img src={pImg} alt="" />
      </div>
      <div className="portfolio-content">
        <p className="portfolio-intro">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          fugit rerum sunt doloribus dolorem porro amet, ullam unde! Earum totam
          placeat ab fugit suscipit recusandae architecto, numquam doloremque
          commodi accusantium eius mollitia minus, sed dolore facere, excepturi
          non nesciunt consequuntur."
        </p>
        <h2 className="portfolio-name">Xabi Alanso</h2>
        <p className="portfolio-one-liner">Head of marketing, inbev company</p>
      </div>
    </div>
  );
}

export default Portfolio;
