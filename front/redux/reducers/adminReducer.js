import { FETCH_USERS, FETCH_PRODUCTS, ADD_PRODUCT} from "../constants";

const initialState = {
  users: [],
  products: [],
};

export default (state = initialState, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.data };
    case FETCH_PRODUCTS:
      return {...state, products: action.data}
    case ADD_PRODUCT:
      return {...state, products: [...state.products, action.data]}  
    default:
      return state;
  }
};
