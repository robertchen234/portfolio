import React from "react";

const NavBar = props => {
  return (
    <div className="navbar">
      <h3 className="nav-title">Portfolio</h3>
      <span className="nav-links">
        <span className="nav-link-bio" onClick={() => props.scrollTo()}>
          <h4 className="pointer button">bio</h4>
        </span>
        <span
          className="nav-link-projects"
          onClick={() => props.scrollTo(window.innerHeight * 4.2)}
        >
          <h4 className="pointer button">projects</h4>
        </span>
        <span
          className="nav-link-resume"
          onClick={() => props.scrollTo(window.innerHeight * 6.4)}
        >
          <h4 className="pointer button">resume</h4>
        </span>
        <span
          className="nav-link-contact"
          onClick={() => props.scrollTo(window.innerHeight * 10)}
        >
          <h4 className="pointer button">contact</h4>
        </span>
      </span>
    </div>
  );
};

export default NavBar;
