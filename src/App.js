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
    const { getProjects } = this.props;

    getProjects(); // poke Heroku to start waking backend up
  }

  changeBanner = bannerImage => {
    this.setState({ bannerImage });
  };

  getProjectsInterval = () => {
    const { projects, getProjects } = this.props;

    const interval = setInterval(() => {
      if (projects.length < 1) {
        getProjects();
      }
    }, 1000); // fetch data every 1 second until data arrives

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return interval;
  };

  render() {
    setTimeout(() => {
      this.getProjectsInterval();
    }, 2000); // give Heroku 2 seconds to wake up
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
