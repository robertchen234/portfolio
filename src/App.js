import React, { Component } from "react";
import "./App.scss";

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
    bannerImage: "bannerbio.jpg",
  };

  changeBanner = (bannerImage) => {
    this.setState({ bannerImage });
  };

  render() {
    return (
      <div className="appContainer">
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

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

const mapDispatchToProps = (dispatch) => {
  return { getProjects: bindActionCreators(getProjects, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
