import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productReducer from "./product/productReducer";
import cartReducer from './cart/cartReducer';
var RootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart : cartReducer,
});

export default RootReducer;
