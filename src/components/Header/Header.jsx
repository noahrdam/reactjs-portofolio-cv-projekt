import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../context/LanguageContext";
import da from "../../translations/da";
import en from "../../translations/en";

function Header() {
  useIntersectionObserver(".header-content", "animate-text");
  const { language } = useLanguage();
  const t = language === "da" ? da : en;

  return (
    <header className="header">
      <Navbar />
      <div className="header-content">
        <div className="header-text-container">
          <h2 className="header-text">{t.header.greeting}</h2>
          <h1 className="header-title">{t.header.name}</h1>
          <p className="header-paragraph">{t.header.description}</p>
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
          {t.header.moreAboutMe}
        </a>
      </div>
    </header>
  );
}

export default Header;
