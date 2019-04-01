import React from "react";

const Banner = props => {
  return (
    <div className="header-break-footer" onClick={() => props.scrollTo()} style={ { backgroundImage: `url(/assets/${props.bannerImage})` } }>
      <div className="banner-text scroll-text">
        <h1>Robert</h1>
        <h1>Chen</h1>
        <span
          className="pointer center scroll"
        >
          <img src="/assets/down-arrow.png" alt="down arrow" />
        </span>
      </div>
    </div>
  );
};

export default Banner;
