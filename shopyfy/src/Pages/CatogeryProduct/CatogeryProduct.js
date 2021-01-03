import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCategoryProducts,
  clearProducts,
} from "./../../Redux/product/productAction";
import ProductCart from "./../../Components/ProductCart/ProductCart";

const CatogeryProduct = ({
  match: {
    params: { category },
  },
  fetchCategoryProducts,
  clearProducts,
  products,
}) => {
  useEffect(() => {
    //CDM
    fetchCategoryProducts(category);
    return ()=>{
      // CWU
      clearProducts()
    }
  }, []);
  return (
    <div>
      <h1>{category} Products Page</h1>
      {products.map((product) => (
        <ProductCart key={product.id} {...product} />
      ))}
    </div>
  );
};

var actions = {
  fetchCategoryProducts,
  clearProducts,
};

var mapState = (state) => ({
  products: state.products,
});
export default connect(mapState, actions)(CatogeryProduct);
