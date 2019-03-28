import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectCard from "../components/ProjectCard";

class ProjectsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.projects.map(proj => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectsContainer);
