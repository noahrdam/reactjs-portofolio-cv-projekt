import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox.jsx";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../context/LanguageContext";
import da from "../../translations/da";
import en from "../../translations/en";

//SVGs
import csharp from "../../assets/csharp.svg";
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";
import mongodb from "../../assets/mongodb.svg";
import js from "../../assets/js.svg";
import blazor from "../../assets/blazor.svg";
import react from "../../assets/react.svg";
import netframework from "../../assets/netframework.svg";
import docker from "../../assets/docker.svg";
import kubernetes from "../../assets/kubernetes.svg";
import tensorflow from "../../assets/tensorflow.svg";
import mediapipe from "../../assets/mediapipe.svg";
import typescript from "../../assets/typescript.svg";
import supabase from "../../assets/supabase.svg";
import reactrouter from "../../assets/react-router.svg";
import tailwind from "../../assets/tailwind.svg";

function Projects() {
  useIntersectionObserver(".projects-section", "animate-text");
  useIntersectionObserver(".project", "animate-text", { threshold: 0.1 });
  useIntersectionObserver(".github-all-button", "animate-text", { threshold: 0.1 });
  const { language } = useLanguage();
  const t = language === "da" ? da : en;

  return (
    <div id="projects" className="projects-section">
      <h1 className="projects-title">{t.projects.title}</h1>
      <div className="projects-container">
        <ProjectBox
          title={t.projects.titles[0]}
          description={
            <>
              {t.projects.descriptions[0]}
              <br />
              <br />
            </>
          }
          linkText={t.projects.viewProject}
          gitRepoLink="https://github.com/noahrdam/EksamensProjekt"
          technologies={[
            { image: csharp },
            { image: html5 },
            { image: css3 },
            { image: mongodb },
            { image: js },
            { image: blazor },
            { image: netframework },
          ]}
        />
        <ProjectBox
          title={t.projects.titles[1]}
          description={
            <>
              {t.projects.descriptions[1]}
            </>
          }
          linkText={t.projects.viewProject}
          gitRepoLink="https://github.com/noahrdam/SearchEngineProject"
          technologies={[
            { image: netframework },
            { image: blazor },
            { image: docker },
            { image: kubernetes }, 
            { image: csharp },
             
          ]}
        />
        <ProjectBox
          title={t.projects.titles[2]}
          description={
            <>
              {t.projects.descriptions[2]}
            </>
          }
          gitRepoLink="https://github.com/noahrdam/ai-draw-and-guess-project"
          linkText={t.projects.viewProject}
          link="https://airdraw-6yxg.onrender.com/"
          technologies={[
            { image: react },
            { image: css3 },
            { image: html5 },
            { image: tensorflow },
            { image: mediapipe },
            { image: typescript },
          ]}
        />
        <ProjectBox
          title={t.projects.titles[3]}
          description={
            <>
              {t.projects.descriptions[3]}
            </>
          }
          linkText={t.projects.viewProject}
          gitRepoLink="https://github.com/noahrdam/nabonet-projekt"
          technologies={[
            { image: react },
            { image: typescript },
            { image: reactrouter },
            { image: supabase },
            { image: tailwind },
          ]}
        />
      </div>
      <a
        href="https://github.com/noahrdam?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="github-all-button"
      >
        {t.projects.seeAllOnGitHub} <i className="fab fa-github"></i>
      </a>
    </div>
  );
}

export default Projects;
