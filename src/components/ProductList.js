import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  render() {
    return (
      <div class="most-popular">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-section">
              <h4>
                # <em>Latest In</em> Tech
              </h4>
            </div>
            <div class="row">
              {/* CARD MACRO HERE */}
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
              <div class="col-lg-12">
                <div class="main-button">
                  <Link to="/browse">Explore Now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
