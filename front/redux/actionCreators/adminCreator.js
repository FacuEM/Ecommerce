import { FETCH_USERS, FETCH_PRODUCTS, UPDATE_PRODUCT, ADD_PRODUCT } from "../constants";
import axios from "axios";

export const fetchUsersCreator = (data) => {
  return {
    type: FETCH_USERS,
    data,
  };
};

const fetchAdminProductsCreator = (data) => ({ type: FETCH_PRODUCTS, data });

const updateAdminProduct = (data) => ({type: UPDATE_PRODUCT, data})

const addAdminProduct = (data) => ({type: ADD_PRODUCT, data})

//////////USERS ADMIN

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

//////////PRODUCTS


export const fetchAdminProducts = () => (dispatch) => {
  axios.get(`/api/admin/products`)
  .then(res => res.data)
  .then((prods) => {
    dispatch(fetchAdminProductsCreator(prods));
  })
};

export const updateProduct = (id,dato) => (dispatch) => {
  return axios
  .put(`/api/admin/products/${id}/editProduct`, dato)
  .then(() => axios.get(`/api/admin/products`)
  .then(res => res.data)
  .then((prods) => {
    dispatch(fetchAdminProductsCreator(prods));
  }))
};

export const addProduct = (dato) => (dispatch) => {
  axios.post(`/api/admin/products/newProduct`, dato)
  .then(res => res.data)
  .then((prod) => {
    dispatch(addAdminProduct(prod));
  })
};