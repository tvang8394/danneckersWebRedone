import { combineReducers } from "redux";
import { addItemReducer } from "./addItemReducer";
import { userReducer } from './userReducer';

export default combineReducers({
  cart: addItemReducer,
  user: userReducer
});
