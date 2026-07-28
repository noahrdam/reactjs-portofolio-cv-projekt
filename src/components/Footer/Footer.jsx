import React from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
import da from "../../translations/da";
import en from "../../translations/en";

function Footer() {
  const { language } = useLanguage();
  const t = language === "da" ? da : en;

  return (
    <footer className="footer">
      <p className="footer-text">
        {t.footer.madeBy} <i className="fa-brands fa-react"></i>
      </p>
      <p className="footer-copyright">
        {t.footer.rights.replace("{year}", new Date().getFullYear())}
      </p>
    </footer>
  );
}

export default Footer;
