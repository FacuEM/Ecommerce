import { IS_LOGGED, FETCH_ERROR, SET_ERROR } from "../constants";
import axios from "axios";

export const isLogged = (user) => {
  return {
    type: IS_LOGGED,
    payload: user,
  };
};

export const fetchError = () => {
  return {
    type: FETCH_ERROR,
  };
};

export const setError = () => {
  return {
    type: SET_ERROR,
  };
};

export const login = (data) => (dispatch) => {
  return axios
    .post("/api/user/login", data)
    .then((response) => dispatch(isLogged(response.data)))
    .catch(() => dispatch(fetchError()));
};

export const fetchUser = () => (dispatch) => {
  return axios
    .get("/api/user/me")
    .then((response) => dispatch(isLogged(response.data)));
};

export const register = (data) => (dispatch) => {
  return axios
    .post("/api/user/register", data)
    .then((res) => console.log(res.data))
    .catch(() => dispatch(fetchError()));
};

export const logout = () => (dispatch) => {
  return axios.post("/api/user/logout").then(() => dispatch(isLogged({})));
};
