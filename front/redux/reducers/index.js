import { combineReducers } from "redux";
import registerReducer from "../reducers/registerReducer";
import userReducer from "../reducers/userReducer";
import productReducer from "../reducers/productReducer";

export default combineReducers({
  register: registerReducer,
  login: userReducer,
  products: productReducer,
});
