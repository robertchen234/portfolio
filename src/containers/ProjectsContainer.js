import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectDetail from "../components/ProjectDetail";
import ProjectCard from "../components/ProjectCard";

class ProjectsContainer extends Component {
  state = {
    isClicked: false,
    project: {},
    projectsList: [
      {
        id: 1,
        title: "Paperspace",
        teaser: "AI Machine Learning Platform",
        description:
          "Paperspace is a high-performance cloud computing and ML development platform for building, training and deploying machine learning models. Tens of thousands of individuals, startups, and enterprises use Paperspace to iterate faster and collaborate on intelligent, real-time prediction engines.",
        year: 2019,
        tech_stack: "React (Hooks), TypeScript, NodeJS, PostgreSQL",
        demo_url: "https://paperspace.com",
        git_url: null,
        video_url: null,
        image_url: "paperspace.png",
      },
      {
        id: 2,
        title: "Zombears Attack",
        teaser: "Social Deception Game",
        description:
          "With magical tools, deceptive subplots, and mischievous characters find the Zombears within your group and eliminate them!",
        year: 2020,
        tech_stack: "React (Hooks), TypeScript, NodeJS, MongoDB",
        demo_url: "https://zombearsattack.com",
        git_url: null,
        video_url: null,
        image_url: "zombearsattack.png",
      },
    ],
  };

  toggleClick = (project) => {
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
            <ProjectDetail
              key={this.state.project.id}
              project={this.state.project}
              toggleClick={this.toggleClick}
            />
          ) : (
            <div id="projects" className="projects-section">
              <div className="projects-title">
                <h2>Projects</h2>
              </div>
              <div className="projectsContainer">
                {this.state.projectsList
                  .sort((a, b) => b.id - a.id)
                  .map((proj) => (
                    <ProjectCard
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

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectsContainer);
