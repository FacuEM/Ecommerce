import { ADD_REVIEW, FETCH_REVIEW } from "../constants";

const initialState = {
  reviews: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, reviews: [...state.reviews, action.data] };
    case FETCH_REVIEW:
      return { ...state, reviews: action.data };
    default:
      return state;
  }
}
