import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProjects } from "./actions/projectActions";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Bio from "./components/Bio";
import ProjectsContainer from "./containers/ProjectsContainer";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    bannerImage: "bannerbio.jpg"
  };

  componentDidMount() {
    this.props.getProjects()
  }

  changeBanner = bannerImage => {
    this.setState({ bannerImage });
  };

  getProjectsInterval = () => {
    const interval = setInterval(() => {
      this.props.projects.length < 1
        ? this.props.getProjects()
        : clearInterval(interval);
    }, 3000);

    return this.props.projects.length < 1 ? interval : clearInterval(interval);
  };

  render() {
    this.getProjectsInterval();

    return (
      <div>
        <NavBar changeBanner={this.changeBanner} />
        <Banner bannerImage={this.state.bannerImage} />
        <Bio />
        <ProjectsContainer />
        <Resume />
        <Footer />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
