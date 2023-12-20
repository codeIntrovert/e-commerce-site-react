import React from "react";

const Hero = () => {
  return (
    <div className="main-banner">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h6>Welcome To CodeColts</h6>
            <h4>
              Excel in the Art of{" "}
              <em>
                <span>Coding</span>
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
