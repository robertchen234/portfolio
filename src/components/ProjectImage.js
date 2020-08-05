import React from "react";
import { Link } from "react-scroll";

const ProjectImage = props => {
  const project = props.project;
  return (
    <div className="project-div pointer" id="f1_container">
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={253}
        duration={500}
        onClick={() => props.toggleClick(project)}
      >
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
      </Link>
    </div>
  );
};

export default ProjectImage;
