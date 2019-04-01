import React from "react";

const NavBar = props => {
  return (
    <div className="navbar">
      <h3 className="nav-title">Portfolio</h3>
      <span className="nav-links">
        <span
          className="nav-link-bio"
          onClick={() => props.scrollTo()}
          onMouseEnter={() => props.changeBanner("bannerbio.jpg")}
        >
          <h4 className="pointer button">bio</h4>
        </span>
        <span
          className="nav-link-projects"
          onClick={() => props.scrollTo(window.innerHeight * 4.2)}
          onMouseEnter={() => props.changeBanner("bannerprojects.jpg")}
        >
          <h4 className="pointer button">projects</h4>
        </span>
        <span
          className="nav-link-resume"
          onClick={() => props.scrollTo(window.innerHeight * 6.4)}
          onMouseEnter={() => props.changeBanner("bannerresume.jpg")}
        >
          <h4 className="pointer button">resume</h4>
        </span>
        <span
          className="nav-link-contact"
          onClick={() => props.scrollTo(window.innerHeight * 10)}
          onMouseEnter={() => props.changeBanner("bannercontact.jpg")}
        >
          <h4 className="pointer button">contact</h4>
        </span>
      </span>
    </div>
  );
};

export default NavBar;
