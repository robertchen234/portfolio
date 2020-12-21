import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-scroll";

const ProjectDetail = (props) => {
  const project = props.project;
  return (
    <div
      className={`${project.title
        .toLowerCase()
        .split(" ")
        .join("-")} projectDetailBackground`}
    >
      <div className="dark-overlay">
        <div id="projects" className="projectDetail">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-253}
            duration={500}
          >
            <div
              className="go-back pointer"
              onClick={() => props.toggleClick(project)}
            >
              <img class="back-arrow" src="/assets/back.png" alt="back arrow" />
            </div>
          </Link>
          <div className="right details">
            <h2 className="center">{project.title}</h2>
            <h5 className="center teaser">{project.teaser}</h5>
            <h6 className="center">{project.year}</h6>
            <br />
            <br />
            <p>{project.description}</p>
            <p>Technology Stack: {project.tech_stack}</p>
            <span className="buttons">
              {project.demo_url ? (
                <a
                  href={`${project.demo_url}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h4 className="pointer button dark-surround black">
                    Website
                  </h4>
                </a>
              ) : null}
              {project.git_url ? (
                <a
                  href={`${project.git_url}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h4 className="pointer button dark-surround black">GitHub</h4>
                </a>
              ) : null}
            </span>
          </div>
          <div className="left asset">
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
              <a
                href={`${project.demo_url}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  width="100%"
                  className="image pointer"
                  src={`/assets/${project.image_url}`}
                  alt={project.title}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, null)(ProjectDetail);
