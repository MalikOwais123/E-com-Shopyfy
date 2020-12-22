import React, { useEffect } from "react";
import { connect } from "react-redux";
import { arrangeProducts } from "../../Utility/products";
import { fetchProducts } from "./../../Redux/product/productAction";

const Catogery = ({ fetchProducts, categories }) => {
  console.log(categories);
  useEffect(() => {
    // CDM
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Catogery Page</h1>
    </div>
  );
};

var actions = {
  fetchProducts,
};

var mapState = (state) => ({
  categories: arrangeProducts(state.products),
});

export default connect(mapState, actions)(Catogery);
