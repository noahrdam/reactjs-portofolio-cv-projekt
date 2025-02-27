import React from "react";
import "./Projects.css";

function ProjectBox(props) {
  return (
    <div className="project">
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
      <div className="project-technologies">
        {props.technologies.map((tech, index) => (
          <div key={index} className="technology">
            <img src={tech.image} className="technology-image" />
          </div>
        ))}
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link-button"
      >
        {props.linkText}
      </a>
      {props.gitRepoLink && (
        <a
          href={props.gitRepoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-button"
        >
          Repo <i className="fab fa-github"></i>
        </a>
      )}
    </div>
  );
}

export default ProjectBox;
