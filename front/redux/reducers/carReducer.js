import {FETCH_ORDER} from "../constants"

const initialState = { 
    order : {},
    carProducts : []
};

export default  (state = initialState, action)=> {
switch (action.type) {
  case FETCH_ORDER: 
    return {...state, order : action.order}  
  default: 
    return state;
}
}