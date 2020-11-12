import { FETCH_USERS } from "../constants";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.data };
    default:
      return state;
  }
};
