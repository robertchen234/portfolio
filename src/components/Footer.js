import React from "react";

const Footer = (props) => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <a
          href="https://github.com/robghchen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">GitHub</h5>
        </a>
        <a
          href="https://www.linkedin.com/in/robghchen/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">LinkedIn</h5>
        </a>
        <a
          href="https://dev.to/robghchen"
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
      </div>
      <div className="footer-bottom">
        <a
          href="mailto:robghchen@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">robghchen@gmail.com</h5>
        </a>
      </div>
    </div>
  );
};

export default Footer;
