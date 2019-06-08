import React from "react";

const Footer = props => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <a
          href="https://github.com/robertchen234"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">GitHub</h5>
        </a>
        <a
          href="https://www.linkedin.com/in/robertchen234/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">LinkedIn</h5>
        </a>
        <a
          href="https://dev.to/robertchen234"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">Blog</h5>
        </a>
        <a
          href="https://www.youtube.com/channel/UCHXw3WolW7kEZvExoA3P3VQ"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">YouTube</h5>
        </a>
        <a
          href="https://www.meetup.com/movie-nightime/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">Movies</h5>
        </a>
      </div>
      <div className="footer-bottom">
        <a
          href="mailto:robertchen234@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">robertchen234@gmail.com</h5>
        </a>
      </div>
    </div>
  );
};

export default Footer;
