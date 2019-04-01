import React from "react";

const ProjectImage = props => {
  const project = props.project;
  return (
    <div className="project-div" id="f1_container" onClick={() => props.toggleClick(project)}>
      <div className="flipper shadow" id="f1_card">
        <div className="front face">
          <img
            className="project-image"
            src={`/assets/${project.image_url}`}
            alt={project.title}
          />
        </div>
        <div className="back face center">
          <h4>{project.year}</h4>
          <p>{project.tech_stack}</p>
        </div>
      </div>
      <div className="project-title">
        <h3>{project.title}</h3>
        <p>{project.teaser}</p>
      </div>
    </div>
  );
};

export default ProjectImage;
