
import { useReducer } from "react";
import { combineReducers } from "redux";
import cartReducer from "./cart/CartReducers";
import userReducer from "./user/userReducer";

export default combineReducers({
  user:userReducer ,
  cart:cartReducer
})