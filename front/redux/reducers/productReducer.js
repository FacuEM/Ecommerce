import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_CATEGORY,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ADMIN_PRODUCTS,
} from "../constants";

const initialState = {
  products: [],
  selectedProduct: {},
  categoryProducts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.data };
    case FETCH_PRODUCT:
      return { ...state, selectedProduct: action.data };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.data] };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.data),
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        categoryProducts: action.data,
      };
    case FETCH_ADMIN_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
}
