import React from "react";
import "./Blog.css";
import bImg from "../../images/blog11-img.webp";

function Blog() {
  return (
    <div className="blog-section container">
      <div className="blog-intro">
        <h3 className="blog-one-liner">WORKFLOW</h3>
        <h1 className="blog-heading">Produce more. Agnonize less</h1>
        <p className="blog-sub-heading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          error, quibusdam quia atque perferendis blanditiis. Quibusdam odio
          quia atque sapiente?
        </p>
      </div>
      <div className="blog-img-container">
        <img src={bImg} alt="" />
      </div>
    </div>
  );
}

export default Blog;
