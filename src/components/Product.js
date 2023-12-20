import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

const Product = ({ product }) => {
  const { id, title, img, price, rating, inCart } = product;

  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item cardborder">
        <ProductConsumer>
          {(value) => (
            <div
              onClick={() => {
                value.handleDetail(id);
              }}
            >
              <Link to="/details">
                <img
                  alt={title}
                  style={{ margin: "10px 0px 10px 0px" }}
                  src={img}
                />
              </Link>

              <h4>
                {title}
                <br />
                <span>${price}</span>
              </h4>
              <ul>
                <li>
                  <i className="fa fa-star" style={{ color: "#ffec51" }}></i>{" "}
                  {rating}
                </li>
                {/* Uncomment the line below if you want to include the bookmark icon */}
                {/* <li><i className=""></i></li> */}
                <li>
                  <i
                    className="fa"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="" disabled>
                        {" "}
                        in Cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </i>
                </li>
              </ul>
            </div>
          )}
        </ProductConsumer>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
