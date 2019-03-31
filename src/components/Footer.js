import React from "react";

const Footer = props => {
  return (
    <div className="footer header-footer">
      <div className="dark-overlay">
        <div className="footer-background">
          <div className="footer-text">
            <div className="left">
              <img
                src="/assets/robchen.jpg"
                className="icon image"
                alt="rob chen"
              />
              <p>
                When I'm not coding, I'm either blogging, vlogging, or hosting
                meetups.
              </p>
              <p>Connect, reach out, subscribe, follow, and hang out!</p>
            </div>
            <div className="right">
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://github.com/robertchen234")
                }
              >
                GitHub
              </h3>
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab(
                    "https://www.linkedin.com/in/robertchen234/"
                  )
                }
              >
                LinkedIn
              </h3>
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://medium.com/@robertchen234")
                }
              >
                Medium
              </h3>
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab(
                    "https://www.youtube.com/channel/UCHXw3WolW7kEZvExoA3P3VQ"
                  )
                }
              >
                YouTube
              </h3>
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("https://www.meetup.com/movie-nightime/")
                }
              >
                Movies
              </h3>
              <h3
                className="pointer button"
                onClick={() =>
                  props.openInNewTab("mailto:robertchen234@gmail.com")
                }
              >
                robertchen234@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
