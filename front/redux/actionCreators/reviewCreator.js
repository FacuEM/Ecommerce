import axios from "axios";
import { ADD_REVIEW, FETCH_REVIEW } from "../constants";

const addReviewCreator = (data) => ({ type: ADD_REVIEW, data });

const fetchReviewsCreator = (data) => ({ type: FETCH_REVIEW, data });

export const addReview = (id, data) => (dispatch) => {
  axios
    .post(`/api/review/addReview/${id}`, data)
    .then((res) => {
      dispatch(addReviewCreator(res.data))
    });
};

export const fetchReviews = (id) => (dispatch) => {
  axios
    .get(`/api/review/${id}`)
    .then((res) => dispatch(fetchReviewsCreator(res.data)));
};
