import { IS_LOGGED, FETCH_ERROR, SET_ERROR } from "../constants";

const initialState = {
  logged: {},
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, logged: action.payload };
    case FETCH_ERROR:
      return { ...state, error: !state.error };
    case SET_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
}
