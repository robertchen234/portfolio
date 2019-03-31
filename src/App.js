import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getProjects } from "./actions/projectActions";

import Banner from "./components/Banner";
import ProjectsContainer from "./containers/ProjectsContainer";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  openInNewTab = url => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  scrollTo = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div>
        <Banner scrollTo={this.scrollTo} />
        <Route path="/" render={() => <ProjectsContainer />} />
        <Footer openInNewTab={this.openInNewTab} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

const mapDispatchToProps = dispatch => {
  return { getProjects: bindActionCreators(getProjects, dispatch) };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
