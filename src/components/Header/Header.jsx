import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function Header() {
  useIntersectionObserver(".header-content", "animate-text");

  return (
    <header className="header">
      <Navbar />
      <div className="header-content">
        <div className="header-text-container">
          <h2 className="header-text">👋Hej, jeg hedder</h2>
          <h1 className="header-title">Noah Rosenstand Dam</h1>
          <p className="header-paragraph">
            En aspirerende softwareudvikler..✨
          </p>
        </div>
        <div className="header-icons">
          <a
            href="https://github.com/noahrdam"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/noahrdam/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <a href="#profile" className="more-about-me-button">
          Mere om mig
        </a>
      </div>
    </header>
  );
}

export default Header;
