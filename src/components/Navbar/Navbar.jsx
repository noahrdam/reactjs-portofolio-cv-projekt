import React from "react";
import "./Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const texts = {
    da: { omMig: "Om mig", projekter: "Projekter", kontaktMig: "Kontakt mig" },
    en: { omMig: "About me", projekter: "Projects", kontaktMig: "Contact me" },
  };

  const t = texts[language];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#profile" className="navbar-link">
          {t.omMig}
        </a>
        <a href="#projects" className="navbar-link">
          {t.projekter}
        </a>
        <a href="#contact" className="navbar-link">
          {t.kontaktMig}
        </a>
        <div className="navbar-language">
          <button
            className={`flag-button ${language === "da" ? "active" : ""}`}
            onClick={() => toggleLanguage("da")}
            title="Dansk"
          >
            🇩🇰
          </button>
          <button
            className={`flag-button ${language === "en" ? "active" : ""}`}
            onClick={() => toggleLanguage("en")}
            title="English"
          >
            🇬🇧
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
