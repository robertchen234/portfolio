import React from "react";
import { Link } from "react-scroll";

const Banner = props => {
  return (
    <React.Fragment>
      <Link
        activeClass="active"
        to="bio"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div
          className="banner header-break-footer"
          style={{ backgroundImage: `url(/assets/${props.bannerImage})` }}
        >
          <div className="banner-text scroll-text">
            <h1>Robert</h1>
            <h1>Chen</h1>
            <div className="pointer center scroll">
              <img src="/assets/down-arrow.png" alt="down arrow" />
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Banner;
