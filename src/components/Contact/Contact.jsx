import React from "react";
import "./Contact.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../context/LanguageContext";
import da from "../../translations/da";
import en from "../../translations/en";

function Contact() {
  useIntersectionObserver(".contact-section", "animate-text");
  const { language } = useLanguage();
  const t = language === "da" ? da : en;

  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-title">{t.contact.title}</h1>
      <p className="contact-subtitle">{t.contact.subtitle}</p>
      <h2 className="contact-name">{t.contact.name}</h2>
      <ul className="contact-list">
        <li className="contact-item">{t.contact.email}</li>
        <li className="contact-item">{t.contact.phone}</li>
        <li className="contact-item">{t.contact.address}</li>
      </ul>
    </div>
  );
}

export default Contact;
