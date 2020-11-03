import {FETCH_PRODUCTS, FETCH_PRODUCT} from "../constants"

const initialState = { 
    products : [],
    selectedProduct : {}
};

export default function login (state = initialState, action) {
switch (action.type) {
  case FETCH_PRODUCTS: 
    return {...state, products : action.data} 
  case FETCH_PRODUCT:
    return {...state, selectedProduct: action.data}    
  default: 
    return state;
}
}