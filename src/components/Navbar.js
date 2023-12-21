import React from "react";
import logoImage from "../assets/images/logo.png"; // Import the logo image
import { Link } from "react-router-dom";
import bmcImage from "../assets/images/bmc-button.png"; // Import the Buy Me a Coffee

function Navbar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/">
                <a href="/" className="logo">
                  <img src={logoImage} alt="Logo" className="logo" />
                </a>
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Search start ***** 
              <div className="search-input">
                <form id="search" method="POST" action="/browse">
                  <input
                    type="text"
                    placeholder="Search Courses"
                    id="searchText"
                    name="searchKeyword"
                    value="Your Search Keyword" // Replace with your search keyword state
                  />
                  <i type="submit" className="fa fa-search"></i>
                </form>
              </div>
               ***** Search End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <Link to="/" id="home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/browse" id="home">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/cart" id="cart">
                    Cart
                  </Link>
                </li>
                <li
                  onClick={() =>
                    window.open(
                      "https://www.buymeacoffee.com/codeColts",
                      "_blank"
                    )
                  }
                >
                  <img src={bmcImage} alt="Buy Me a Coffee" />
                </li>
                {/* Add more items as required */}
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
