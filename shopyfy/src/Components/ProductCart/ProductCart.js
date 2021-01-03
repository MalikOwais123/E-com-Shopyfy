import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
} from "./../../Redux/cart/cartActions";

const ProductCart = ({ addToCart, ...product }) => {
  var { productName, cost } = product;
  return (
    <div>
      <h1>
        {productName} - {`$ ${cost}`} -{" "}
        <button onClick={() => addToCart(product)}>Add to kart</button>
      </h1>
    </div>
  );
};

var actions = {
  addToCart,
};

export default connect(null, actions)(ProductCart);
