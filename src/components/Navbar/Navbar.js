import React from "react";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="nav-logo">
          <span class="color">Team</span> Tweaks{" "}
        </h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links active">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/" className="btn-link">
            Log In
          </Link>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
