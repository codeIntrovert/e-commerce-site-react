import React from "react";

const Hero = () => {
  return (
    <div className="main-banner">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h6>Welcome To CodeColts Store!</h6>
            <h4>
              Biggest Hub of Latest{" "}
              <em>
                <span>TECH</span>
              </em>
            </h4>
            <div className="main-button">
              <a href="/browse">Browse Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
