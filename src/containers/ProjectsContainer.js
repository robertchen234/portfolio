import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectImage from "../components/ProjectImage";

class ProjectsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="projects-break-background header-break-footer">
          <div className="dark-overlay" />
        </div>
        <div className="projects-section">
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
                  openInNewTab={this.props.openInNewTab}
                />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectsContainer);
