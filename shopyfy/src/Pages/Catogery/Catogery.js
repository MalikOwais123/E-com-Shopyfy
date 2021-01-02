import React, { useEffect } from "react";
import CategoryList from "../../Components/CategoryList/CategoryList";
import { clearProducts } from "./../../Redux/product/productAction";
import { connect } from 'react-redux';

const Catogery = ({ clearProducts }) => {
  useEffect(() => {
    // if it will return a function it will work as CWU(component will unmount)
    return () => {
      // CWU
      clearProducts();
    };
  }, []);
  return (
    <div>
      <CategoryList />
    </div>
  );
};

var actions = {
  clearProducts,
};

export default connect(null,actions)(Catogery);
