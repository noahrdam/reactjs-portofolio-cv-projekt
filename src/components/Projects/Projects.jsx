import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox.jsx";

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
            { image: "src/assets/csharp.svg" },
            { image: "src/assets/html5.svg" },
            { image: "src/assets/css3.svg" },
            { image: "src/assets/mongodb.svg" },
            { image: "src/assets/js.svg" },
            { image: "src/assets/blazor.svg" },
          ]}
        />
        <ProjectBox
          title="React Todo App"
          description="En simpel Todo App udviklet i React. Appen har funktionalitet til at tilføje, slette og markere opgaver som færdige."
          link="https://www.example.com"
          linkText="View Project"
          gitRepoLink="https://github.com/noahrdam/reactjs-todolist"
          technologies={[
            { image: "src/assets/react.svg" },
            { image: "src/assets/js.svg" },
          ]}
        />
        <ProjectBox
          title="Reddit Projekt"
          description="En Reddit klon udviklet i C# med entity framework. Projektet har funktionalitet til at oprette, slette og kommentere på posts."
          link="https://www.example.com"
          linkText="View Project"
          gitRepoLink="https://github.com/noahrdam/RedditProjekt"
          technologies={[
            { image: "src/assets/csharp.svg" },
            { image: "src/assets/netframework.svg" },
            { image: "src/assets/blazor.svg" },
          ]}
        />
        <ProjectBox
          title="Medicin Ordinationsprojekt"
          description="Et medicin ordinationsprojekt udviklet i C# og ASP.NET. Projektet har funktionalitet til at oprette, slette og redigere ordinationer."
          link="https://www.example.com"
          linkText="View Project"
          gitRepoLink="https://github.com/noahrdam/TestProjekt"
          technologies={[
            { image: "src/assets/csharp.svg" },
            { image: "src/assets/netframework.svg" },
            { image: "src/assets/blazor.svg" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
