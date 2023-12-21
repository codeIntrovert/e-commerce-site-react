import React from "react";
import FooterLogo from "../assets/images/logo.png";
const Footer = () => {
  const fallbackURL = "https://github.com/codeIntrovert";
  const instagramURL = "https://www.instagram.com/introvertcoder/";
  const youtubeURL = "https://www.youtube.com/introvertcoder";
  return (
    <footer className="bg-primary-gradient">
      <div className="container py-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
            <h3 className="fs-6 fw-bold" style={{ marginBottom: "10px" }}>
              Socials
            </h3>
            <ul className="list-unstyled dim">
              <li>
                <a href={instagramURL}>Instagram</a>
              </li>
              <li>
                <a href={fallbackURL}>Twitter</a>
              </li>
              <li>
                <a href={youtubeURL}>Youtube</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
            <h3 className="fs-6 fw-bold" style={{ marginBottom: "10px" }}>
              About
            </h3>
            <ul className="list-unstyled dim">
              <li>
                <a href={fallbackURL}>Company</a>
              </li>
              <li>
                <a href="https://github.com/codeIntrovert/codeColts/graphs/contributors">
                  Team
                </a>
              </li>
              <li>
                <a href="https://github.com/codeIntrovert/codeColts/blob/main/LEGAL.md">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
            <h3 className="fs-6 fw-bold" style={{ marginBottom: "10px" }}>
              Other Projects
            </h3>
            <ul className="list-unstyled dim">
              <li>
                <a href={fallbackURL}>Portfolio</a>
              </li>
              <li>
                <a href={fallbackURL}>Certify.io</a>
              </li>
              <li>
                <a href={fallbackURL}>Finances.io</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
            <div className="fw-bold d-flex align-items-center mb-2">
              <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                <img src={FooterLogo} alt="" />
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-muted d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">
            Copyright © 2023 The <a href={fallbackURL}>CodeColts</a> Company.
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
