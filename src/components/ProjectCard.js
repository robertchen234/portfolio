import React, { useState } from "react";
import { Link } from "react-scroll";

const projectCard = (props) => {
  const [isHover, setIsHover] = useState(false);

  const project = props.project;
  return (
    <div
      className="projectCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={253}
        duration={500}
        onClick={() => props.toggleClick(project)}
      >
        {isHover ? (
          <div className={`content ${isHover ? "hover" : ""}`}>
            <p>
              {project.title}
              <br />
              {project.year}
              <br />
              {project.teaser}
              <br />
              <br />
              {project.tech_stack}
            </p>
          </div>
        ) : (
          <div className={`content ${isHover ? "hover" : ""}`}>
            <img
              className="project-image"
              src={`/assets/${project.image_url}`}
              alt={project.title}
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default projectCard;
