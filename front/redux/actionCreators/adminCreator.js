import { FETCH_USERS } from "../constants";
import axios from "axios";

export const fetchUsersCreator = (data) => {
  return {
    type: FETCH_USERS,
    data,
  };
};

export const fetchUsers = () => (dispatch) => {
  return axios
    .get("/api/admin/users")
    .then((res) => res.data)
    .then((users) => dispatch(fetchUsersCreator(users)))
    .catch((e) => console.log("ERRORRRR", e));
};

export const upgradeUser = (id) => (dispatch) => {
  return axios
    .put(`/api/admin/users/upgrade/${id}`)
    .then((res) => res.data)
    .then((users) => dispatch(fetchUsersCreator(users)));
};

export const downgradeUser = (id) => (dispatch) => {
  return axios
    .put(`/api/admin/users/downgrade/${id}`)
    .then((res) => res.data)
    .then((users) => dispatch(fetchUsersCreator(users)));
};
