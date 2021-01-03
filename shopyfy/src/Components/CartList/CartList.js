import React from "react";
import CartListItem from "./../CartListItem/CartListItem";
import { connect } from "react-redux";

const CartList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      <h1>Cart List</h1>
      {cartItems.map((item)=> <CartListItem key={item.id} {...item}/>)}
    </div>
  );
};
var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CartList);
