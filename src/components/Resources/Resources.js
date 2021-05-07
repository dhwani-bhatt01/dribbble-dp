import React from "react";
import "./Resources.css";
import rImg from "../../images/res-img.webp";
import Button from "../Button/Button";

function Resources() {
  return (
    <div className="resources container">
      <h1 className="resource-heading">Know your ads inside and out-perform</h1>
      <div className="resource-section container">
        <div className="resource-img-container">
          <img src={rImg} alt="" />
        </div>
        <div className="resource-intro">
          <h3 className="resource-one-liner">INTELLIGENCE</h3>
          <h2 className="resource-intro-heading">
            Every second counts, so every detail matters
          </h2>
          <p className="resource-sub-heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            laudantium corporis! Consequatur corrupti totam voluptatum fuga
            officia quisquam, perferendis, magni quos incidunt dicta, nemo
            tenetur rerum sint molestias sit molestiae?
          </p>
          <Button>Discover</Button>
        </div>
      </div>
    </div>
  );
}

export default Resources;
