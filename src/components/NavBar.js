import React from "react";

const NavBar = props => {
  return (
    <div className="navbar">
      <h3 className="nav-title">Portfolio</h3>
      <span className="nav-links">
        <span className="nav-link-bio">
          <h4>bio</h4>
        </span>
        <span className="nav-link-projects">
          <h4>projects</h4>
        </span>
        <span className="nav-link-resume">
          <h4>resume</h4>
        </span>
        <span className="nav-link-contact">
          <h4>contact</h4>
        </span>
      </span>
    </div>
  );
};

export default NavBar;
