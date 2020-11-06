import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_CATEGORY } from "../constants";

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
    case FETCH_CATEGORY:
      return { ...state, categoryProducts: action.data };
    default:
      return state;
  }
}
