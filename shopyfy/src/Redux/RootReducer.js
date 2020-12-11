import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
var RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer;
