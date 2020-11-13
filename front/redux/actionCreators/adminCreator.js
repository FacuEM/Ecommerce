import {
  FETCH_USERS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_ADMIN_PRODUCTS,
  FETCH_ADMIN_ORDERS,
} from "../constants";
import axios from "axios";
import { fetchCategories } from "../actionCreators/searchCreator";

const fetchUsersCreator = (data) => ({ type: FETCH_USERS, data });

const fetchAdminProductsCreator = (data) => ({
  type: FETCH_ADMIN_PRODUCTS,
  data,
});

const addAdminProduct = (data) => ({ type: ADD_PRODUCT, data });
const deleteAdminProduct = (data) => ({ type: DELETE_PRODUCT, data });

const addAdminCategory = (data) => ({ type: ADD_CATEGORY, data });
const deleteAdminCategory = (data) => ({ type: DELETE_CATEGORY, data });

const fetchAdminOdersCreator = (data) => ({ type: FETCH_ADMIN_ORDERS, data });

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
  axios
    .get(`/api/admin/products`)
    .then((res) => {
      return res.data;
    })
    .then((prods) => {
      dispatch(fetchAdminProductsCreator(prods));
    });
};

export const updateProduct = (id, data) => () => {
  return axios
    .put(`/api/admin/products/${id}/editProduct`, data)
    .then(() => fetchAdminProducts());
};

export const addProduct = (data) => (dispatch) => {
  axios
    .post(`/api/admin/products/newProduct`, data)
    .then((res) => res.data)
    .then((prod) => {
      dispatch(addAdminProduct(prod));
    });
};

export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`/api/admin/products/${id}/deleteProduct`)
    .then(() => dispatch(deleteAdminProduct(id)));
};

//////////CATEGORY
export const addCategory = (data) => (dispatch) => {
  axios
    .post("/api/admin/categories/newCategory", data)
    .then((res) => res.data)
    .then((cat) => {
      dispatch(addAdminCategory(cat));
    });
};

export const updateCategory = (id, data) => () => {
  return axios
    .put(`/api/admin/categories/${id}/editCategory`, data)
    .then(() => fetchCategories());
};

export const deleteCategory = (id) => (dispatch) => {
  axios
    .delete(`/api/admin/categories/${id}/deleteCategory`)
    .then(() => dispatch(deleteAdminCategory(id)));
};

//////////ORDERS

export const fetchAdminOrders = () => (dispatch) => {
  console.log("action fetchAdminOrders");
  axios
    .get("/api/admin/orders")
    .then((res) => res.data)
    .then((orders) => {
      dispatch(fetchAdminOdersCreator(orders));
    })
    .catch((e) => console.log("ERRORRRR", e));
};
