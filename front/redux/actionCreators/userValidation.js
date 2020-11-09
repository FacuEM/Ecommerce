import { IS_LOGGED, FETCH_ERROR } from "../constants";
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

export const login = (data) => (dispatch) => {
  return axios
    .post("/api/user/login", data)
    .then((response) => dispatch(isLogged(response.data))
    )
    .catch(() => dispatch(fetchError()));
};

export const fetchUser = () => (dispatch) => {
  return axios
    .get("/api/user/me")
    .then((response) => dispatch(isLogged(response.data)));
};

export const register = (data) => (dispatch) => {
  return axios.post("/api/user/register", data);
  /*  .then((response) => dispatch(isLogged(response.data))); */
};

export const logout = () => (dispatch) => {
  return axios.post("/api/user/logout").then(() => dispatch(isLogged({})));
};
