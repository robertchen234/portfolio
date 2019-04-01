import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectImage from "../components/ProjectImage";
import ProjectCard from "../components/ProjectCard";

class ProjectsContainer extends Component {
  state = { isClicked: false, project: {} };

  toggleClick = project => {
    this.setState({ isClicked: !this.state.isClicked, project });
  };


  render() {
    return (
      <React.Fragment>
        <div className="projects-break-background header-break-footer">
          <div className="dark-overlay" />
        </div>
        <div className="projects-switch">
          {this.state.isClicked ? (
            <ProjectCard
              key={this.state.project.id}
              project={this.state.project}
              toggleClick={this.toggleClick}
              openInNewTab={this.props.openInNewTab}
            />
          ) : (
            <div id="projects" className="projects-section">
              <div className="projects-title">
                <h2>Projects</h2>
              </div>
              <div className="projects-area">
                {this.props.projects
                  .sort((a, b) => a.id - b.id)
                  .map(proj => (
                    <ProjectImage
                      key={proj.id}
                      project={proj}
                      toggleClick={this.toggleClick}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectsContainer);
