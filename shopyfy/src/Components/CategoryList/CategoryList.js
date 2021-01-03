import React, { useEffect } from "react";
import CategoryListItem from "./../CategoryListItem/CategoryListItem";
import { connect } from "react-redux";
import { arrangeProducts } from "../../Utility/products";
import { fetchProducts } from "./../../Redux/product/productAction";

const CategoryList = ({ fetchProducts, categories }) => {
  //   console.log(categories);
  useEffect(() => {
    // CDM
    fetchProducts();
  }, []);
  // console.log(categories);
  return (
    <div>
      <h1>Category List Container</h1>

      {categories.map((category) => (
        <CategoryListItem key={category.category} {...category} />
      ))}


    </div>
  );
};

var actions = {
  fetchProducts,
};

var mapState = (state) => ({
  categories: arrangeProducts(state.products),
});

export default connect(mapState, actions)(CategoryList);
