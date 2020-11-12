import {FETCH_ORDERS,FETCH_ORDER,FETCH_CAR_PRODUCTS} from "../constants"

const initialState = { 
    orders : [],
    selectOrder:{},
    carProducts : []
};

export default  (state = initialState, action)=> {
switch (action.type) {
  case FETCH_ORDERS: 
    return {...state, orders : action.orders} 
  case FETCH_ORDER: 
    return {...state, selectOrder : action.orders}    
  case FETCH_CAR_PRODUCTS: 
    return {...state, carProducts : action.products}  
  default: 
    return state;
}
}