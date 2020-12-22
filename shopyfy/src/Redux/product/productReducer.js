import { SET_PRODUCTS } from './productConstant';
var initiallState = [];

var productReducer = (state = initiallState, action) => {
  var { type, payload } = action;

  switch (type) {
      case SET_PRODUCTS:
        return [...payload.products]
    default:
        return state;
  }
};

export default productReducer

