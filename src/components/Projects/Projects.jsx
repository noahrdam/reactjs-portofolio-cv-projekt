import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox.jsx";

//SVGs
import csharp from "../../assets/csharp.svg";
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";
import mongodb from "../../assets/mongodb.svg";
import js from "../../assets/js.svg";
import blazor from "../../assets/blazor.svg";
import react from "../../assets/react.svg";
import netframework from "../../assets/netframework.svg";

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <h1 className="projects-title">Projekter</h1>
      <div className="projects-container">
        <ProjectBox
          title="Full-stack Tilmeldingssystem for Cirkus Summarum Børneklub"
          description="Som en del af mit 2. semester eksamensprojekt har jeg sammen med min studiegruppe udviklet en full-stack Blazor webapplikation for Muskelsvindsfonden. Systemet håndterer tilmelding og administration af børnepasning for frivillige, der arbejder på Cirkus Summarum."
          link="https://clientappforgruppeseks.azurewebsites.net/"
          linkText="View Project"
          gitRepoLink="https://github.com/noahrdam/EksamensProjekt"
          technologies={[
            { image: csharp },
            { image: html5 },
            { image: css3 },
            { image: mongodb },
            { image: js },
            { image: blazor },
          ]}
        />
        <ProjectBox
          title="React Todo App"
          description="En simpel Todo App udviklet i React. Appen har funktionalitet til at tilføje, slette og markere opgaver som færdige."
          link="https://noahrdam.github.io/reactjs-todolist/"
          linkText="View Project"
          gitRepoLink="https://github.com/noahrdam/reactjs-todolist"
          technologies={[{ image: react }, { image: js }]}
        />
        <ProjectBox
          title="Reddit Projekt"
          description="En Reddit klon udviklet i C# med entity framework. Projektet har funktionalitet til at oprette, slette og kommentere på posts."
          gitRepoLink="https://github.com/noahrdam/RedditProjekt"
          technologies={[
            { image: csharp },
            { image: blazor },
            { image: netframework },
          ]}
        />
        <ProjectBox
          title="Medicin Ordinationsprojekt"
          description="Et medicin ordinationsprojekt udviklet i C# og ASP.NET. Projektet har funktionalitet til at oprette, slette og redigere ordinationer."
          gitRepoLink="https://github.com/noahrdam/TestProjekt"
          technologies={[
            { image: csharp },
            { image: blazor },
            { image: netframework },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
