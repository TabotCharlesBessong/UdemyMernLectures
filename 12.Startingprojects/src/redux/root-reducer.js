
import { useReducer } from "react";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartReducer from "./cart/CartReducers";
import userReducer from "./user/userReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user:userReducer ,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)