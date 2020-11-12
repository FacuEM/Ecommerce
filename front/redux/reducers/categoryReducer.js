import { FETCH_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY } from "../constants";

const initialState = {
  categories: [],
  category: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.data };
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.data] };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((c) => c.id !== action.data),
      };
    default:
      return state;
  }
}
