import React from "react";

const Footer = props => {
  return (
    <div className="footer-section">
    <div className="footer-top">
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://github.com/robertchen234")
                }
              >
                GitHub
              </h5>
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab(
                    "https://www.linkedin.com/in/robertchen234/"
                  )
                }
              >
                LinkedIn
              </h5>
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://medium.com/@robertchen234")
                }
              >
                Medium
              </h5>
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab(
                    "https://www.youtube.com/channel/UCHXw3WolW7kEZvExoA3P3VQ"
                  )
                }
              >
                YouTube
              </h5>
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://www.meetup.com/movie-nightime/")
                }
              >
                Movies
              </h5></div><div className="footer-bottom">
              <h5
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("mailto:robertchen234@gmail.com")
                }
              >
                robertchen234@gmail.com
              </h5></div>
            </div>
  );
};

export default Footer;
