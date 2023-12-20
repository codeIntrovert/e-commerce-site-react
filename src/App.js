import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";

// added new files - introvertCoder
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/fontawesome.css";
import "./assets/sass/light_theme.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content" style={{ "padding-top": "8vh" }}>
                <Navbar />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <>
                        <Hero />
                        <ProductList />
                      </>
                    )}
                  />
                  <Route path="/details" component={Details}></Route>
                  <Route path="/cart" component={Cart}></Route>
                  <Route path="/browse" component={ProductList}></Route>
                  <Route component={Default}></Route>
                </Switch>
                <Modal />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
