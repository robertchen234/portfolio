import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getProjects } from "./actions/projectActions";

import ProjectsContainer from "./containers/ProjectsContainer";

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  openInNewTab = url => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  render() {
    return (
      <div>
        <div className="banner header-footer">
          <div className="banner-background">
            <div className="banner-text">
              <h2>Hi, Welcome to Rob's Portfolio</h2>
            </div>
          </div>
        </div>
        <Route path="/" render={() => <ProjectsContainer />} />
        <div className="footer header-footer">
          <div className="footer-background">
            <div className="footer-text">
              <div className="right">
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab("https://github.com/robertchen234")
                  }
                >
                  GitHub
                </h3>
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab(
                      "https://www.linkedin.com/in/robertchen234/"
                    )
                  }
                >
                  LinkedIn
                </h3>
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab("https://medium.com/@robertchen234")
                  }
                >
                  Medium
                </h3>
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab(
                      "https://www.youtube.com/channel/UCHXw3WolW7kEZvExoA3P3VQ"
                    )
                  }
                >
                  YouTube
                </h3>
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab(
                      "https://www.meetup.com/Movie-Night-Tuesdays-at-AMC-Take-a-Break-from-Coding/"
                    )
                  }
                >
                  Movies
                </h3>
                <h3
                  className="pointer button"
                  onClick={() =>
                    this.openInNewTab("mailto:robertchen234@gmail.com")
                  }
                >
                  robertchen234@gmail.com
                </h3>
              </div>
              <div className="left">
                <img
                  src="/assets/robchen.jpg"
                  className="icon image"
                  alt="rob chen"
                />
                <p>
                  When I'm not coding, I'm either blogging, vlogging, or hosting
                  meetups.
                </p>
                <p>Connect, reach out, subscribe, follow, and hang out!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

function mapDispatchToProps(dispatch) {
  return { getProjects: bindActionCreators(getProjects, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
