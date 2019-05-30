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
    this.props.getProjects(); // poke Heroku to start waking backend up
  }

  changeBanner = bannerImage => {
    this.setState({ bannerImage });
  };

  getProjectsInterval = () => {
    const interval = setInterval(() => {
      this.props.projects.length < 1
        ? this.props.getProjects()
        : clearInterval(interval);
    }, 1000); // fetch data every 1 second until it arrives
    return this.props.projects.length < 1 ? interval : clearInterval(interval);
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
