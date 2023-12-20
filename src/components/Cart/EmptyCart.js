import { bottom } from "@popperjs/core";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1 style={{ "padding-bottom": "10%" }}>
            your cart is currently empty
          </h1>
        </div>
      </div>
    </div>
  );
}
