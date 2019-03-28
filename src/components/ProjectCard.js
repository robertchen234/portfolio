import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addClap } from "../actions/projectActions";

const openInNewTab = url => {
  let win = window.open(url, "_blank");
  win.focus();
};

const ProjectCard = props => {
  const project = props.project;
  return (
    <div
      className={`${project.title
        .toLowerCase()
        .split(" ")
        .join("-")} project-card-background`}
    >
    <div className="dark-overlay">
      <div className="project-card">
        <div className={`${project.id % 2 === 1 ? "left" : "right"} details`}>
          <h2 className="center">{project.title}</h2>
          <h5 className="center teaser">{project.teaser}</h5>
          <h6 className="center">{project.year}</h6>
          <p>{project.description}</p>
          <p>Technology Stack: {project.tech_stack}</p>
          <span className="buttons">
            {project.demo_url ? (
              <h4
                className="pointer button"
                onClick={() => openInNewTab(`${project.demo_url}`)}
              >
                Website
              </h4>
            ) : null}
            {project.git_url ? (
              <h4
                className="pointer button"
                onClick={() => openInNewTab(`${project.git_url}`)}
              >
                GitHub
              </h4>
            ) : null}
          </span>
          <div
            onClick={() => props.addClap(project)}
            className="pointer center claps"
          >
            <span role="img" aria-label="clap">
              👏
            </span>
            <span> {project.claps}</span>
          </div>
        </div>
        <div className={`${project.id % 2 === 1 ? "right" : "left"} asset`}>
          {project.video_url ? (
            <iframe
              title={project.title}
              className="youtube"
              width="100%"
              height="400"
              src={project.video_url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          ) : (
            <img
              width="100%"
              className="image pointer"
              onClick={() => openInNewTab(`${project.demo_url}`)}
              src={`/assets/${project.image_url}`}
              alt={project.title}
            />
          )}
        </div></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { projects: state.projects };
};

const mapDispatchToProps = dispatch => {
  return { addClap: bindActionCreators(addClap, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCard);
