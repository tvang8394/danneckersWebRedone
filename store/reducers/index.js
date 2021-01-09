import { combineReducers } from "redux";
import { addItemReducer } from "./addItemReducer";
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';

export default combineReducers({
  cart: addItemReducer,
  user: userReducer,
  order: orderReducer
});
