import React from "react";

const Banner = props => {
  return (
    <div className="banner header-footer">
      <div className="dark-overlay">
        <div className="banner-background">
          <div className="banner-text">
            <h2>Hi, Welcome to Rob's Portfolio</h2>
            <h2 className="pointer center scroll" onClick={props.scrollTo}>
              ↓
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
