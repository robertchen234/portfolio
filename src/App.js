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
    this.props.getProjects();
  }

  openInNewTab = url => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  scrollTo = (destination = window.innerHeight * 1.2) => {
    window.scrollTo({
      top: destination,
      behavior: "smooth"
    });
  };

  changeBanner = bannerImage => {
    this.setState({ bannerImage });
  };

  render() {
    return (
      <div>
        <NavBar scrollTo={this.scrollTo} changeBanner={this.changeBanner} />
        <Banner scrollTo={this.scrollTo} bannerImage={this.state.bannerImage} />
        <Bio />
        <ProjectsContainer openInNewTab={this.openInNewTab} />
        <Resume />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
