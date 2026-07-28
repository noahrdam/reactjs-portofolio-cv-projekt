import React from "react";
import "./Profile.css";
import avatar from "./avatar.jpg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../context/LanguageContext";
import da from "../../translations/da";
import en from "../../translations/en";

function Profile() {
  useIntersectionObserver(".profile-container", "animate-text");
  const { language } = useLanguage();
  const t = language === "da" ? da : en;

  return (
    <div id="profile" className="profile-container">
      <div className="profile-image-container">
        <img src={avatar} alt="Noah Rosenstand Dam" className="profile-image" />
      </div>
      <div className="profile-info">
        <h1 className="profile-title">{t.profile.title}</h1>
        <p className="profile-about">
          {t.profile.about[0]}
          <br></br>
          <br></br>
          {t.profile.about[1]}
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  );
}

export default Profile;
