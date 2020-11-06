import { IS_LOGGED } from "../constants";

const initialState = {
  logged: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, logged: action.payload };

    default:
      return state;
  }
}
