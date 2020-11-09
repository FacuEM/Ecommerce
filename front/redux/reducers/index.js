import { combineReducers } from "redux";
import productReducer from "../reducers/productReducer";
import carReducer from "../reducers/carReducer";
import categoryReducer from "../reducers/categoryReducer";
import userValidationReducer from "../reducers/userValidationReducer";
import reviewReducer from "../reducers/reviewReducer";

export default combineReducers({
  products: productReducer,
  car: carReducer,
  categories: categoryReducer,
  isLogged: userValidationReducer,
  reviews: reviewReducer,
});
