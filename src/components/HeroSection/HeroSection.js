import React from "react";
import "./HeroSection.css";
import HeroImg from "./../../images/hero-img.webp";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Button from "../Button/Button";

function HeroSection() {
  return (
    <div className="hero-section container">
      <div className="hero-intro">
        <h1 className="hero-heading">
          Where data and creativity come together.
        </h1>
        <p className="hero-sub-heading">
          Every digital ad you want, designing with insights, delivered in days.
        </p>
        <div className="hero-buttons">
          <Button>Get a demo</Button>
          <PlayCircleFilledIcon
            style={{ color: "#EEC119", fontSize: 60, marginLeft: "20px" }}
          />
        </div>
      </div>
      <div className="hero-img-container">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
