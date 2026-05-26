import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-title">Kontakt mig</h1>
      <p className="contact-subtitle">
        Leder du efter en engageret medarbejder med interesse for IT-arkitektur
        og softwareudvikling? Jeg er i øjeblikket på udkig efter et studiejob
        og er åben for spændende muligheder.
      </p>
      <h2 className="contact-name">Noah Rosenstand Dam</h2>
      <ul className="contact-list">
        <li className="contact-item">📩Email: noahrdam@gmail.com</li>
        <li className="contact-item">📞Telefon: +45 51 86 91 30</li>
        <li className="contact-item">📍Adresse: Aarhus N, DK</li>
      </ul>
    </div>
  );
}

export default Contact;
