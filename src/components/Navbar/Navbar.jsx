import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#profile" className="navbar-link">
          Om mig
        </a>
        <a href="#projects" className="navbar-link">
          Projekter
        </a>
        <a href="#contact" className="navbar-link">
          Kontakt mig
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
