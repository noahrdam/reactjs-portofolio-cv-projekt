import React from "react";
import "./Profile.css";
import avatar from "./avatar.jpg";

function Profile() {
  return (
    <div id="profile" className="profile-container">
      <div className="profile-image-container">
        <img src={avatar} alt="Noah Rosenstand Dam" className="profile-image" />
      </div>
      <div className="profile-info">
        <h1 className="profile-title">Lidt om mig</h1>
        <p className="profile-about">
          Hej! Mit navn er Noah, og jeg studerer IT-Arkitektur på Aarhus
          Erhvervsakademi, hvor jeg i øjeblikket er på 4. semester. Jeg brænder
          for softwareudvikling og har erfaring med både front-end og back-end
          teknologier. Jeg elsker at udvikle løsninger, der ikke bare fungerer,
          men også skaber værdi for brugerne.
          <br></br>
          <br></br>
          Lige nu er jeg på udkig efter en praktikplads, hvor jeg kan bringe
          mine færdigheder i spil og samtidig lære endnu mere om branchen. Hvis
          du leder efter en engageret praktikant med en passion for
          softwareudvikling, så lad os tage en snak!
          <br></br>
          <br></br>
          Når jeg ikke koder, nyder jeg at se fodbold - gerne med en kold øl i
          hånden, hænge ud med vennerne eller tilbringe tid med min kæreste.
        </p>
      </div>
    </div>
  );
}

export default Profile;
