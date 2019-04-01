import React from "react";
import { Link, animateScroll } from "react-scroll";

const scrollToBottom = () => {
  animateScroll.scrollToBottom();
};

const NavBar = props => {
  return (
    <div className="navbar">
      <h3 className="nav-title">Portfolio</h3>
      <span className="nav-links">
        <Link
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span
            className="nav-link-bio"
            onMouseEnter={() => props.changeBanner("bannerbio.jpg")}
          >
            <h4 className="pointer button">bio</h4>
          </span>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={3}
          duration={500}
        >
          <span
            className="nav-link-projects"
            onMouseEnter={() => props.changeBanner("bannerprojects.jpg")}
          >
            <h4 className="pointer button">projects</h4>
          </span>
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span
            className="nav-link-resume"
            onMouseEnter={() => props.changeBanner("bannerresume.jpg")}
          >
            <h4 className="pointer button">resume</h4>
          </span>
        </Link>
        <span
          className="nav-link-contact"
          onClick={scrollToBottom}
          onMouseEnter={() => props.changeBanner("bannercontact.jpg")}
        >
          <h4 className="pointer button">contact</h4>
        </span>
      </span>
    </div>
  );
};

export default NavBar;
