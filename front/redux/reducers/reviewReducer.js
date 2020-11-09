import { ADD_REVIEW, FETCH_REVIEW } from "../constants";

const initialState = {
  review: {},
  reviews: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, review: action.data };
    case FETCH_REVIEW:
      return { ...state, reviews: action.data };
    default:
      return state;
  }
}
