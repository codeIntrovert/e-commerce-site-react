import { bottom } from "@popperjs/core";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="col-10 mx-auto text-center text-title">
      <h1 style={{ "padding-bottom": "15%" }}>
        Your cart is currently empty {":("}
      </h1>
    </div>
  );
}
