import {FETCH_ORDER,FETCH_CAR_PRODUCTS} from "../constants"

const initialState = { 
    orders : [],
    selectOrder:{},
    carProducts : []
};

export default  (state = initialState, action)=> {
switch (action.type) {
  case FETCH_ORDER: 
    return {...state, order : action.order}  
  case FETCH_CAR_PRODUCTS: 
    return {...state, carProducts : action.products}  
  default: 
    return state;
}
}