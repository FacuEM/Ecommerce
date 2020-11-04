import { FETCH_CATEGORIES } from "../constants";

const initialState = {
  categories: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.data };
    default:
      return state;
  }
}
