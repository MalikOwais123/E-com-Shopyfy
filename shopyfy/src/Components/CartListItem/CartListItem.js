import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "./../../Redux/cart/cartActions";

const CartListItem = ({
  addToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { productName, cost, quantity, coverImage, id } = product;
  return (
    <div>
      <h1>
        {productName} -- {cost} --{" "}
        <button onClick={() => deleteProductFromCart(id)}> X </button>
      </h1>
      <h2>
        {" "}
        <button onClick={() => addToCart(product)}>+</button>
        {quantity} <button onClick={() => removeProductFromCart(id)}>-</button>
      </h2>
    </div>
  );
};

var actions = {
  addToCart,
  removeProductFromCart,
  deleteProductFromCart,
};

export default connect(null, actions)(CartListItem);
