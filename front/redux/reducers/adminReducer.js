import {
  FETCH_USERS,
  FETCH_ADMIN_ORDERS,
  FETCH_ADMIN_USER_ORDERS,
} from "../constants";

const initialState = {
  users: [],
  orders: [],
  userOrders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.data };
    case FETCH_ADMIN_ORDERS:
      return { ...state, orders: action.data };
    case FETCH_ADMIN_USER_ORDERS:
      return { ...state, userOrders: action.data };
    default:
      return state;
  }
};
