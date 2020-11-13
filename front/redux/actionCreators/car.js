import axios from "axios";
import {
  FETCH_ORDERS,
  FETCH_ORDER,
  FETCH_CAR_PRODUCTS,
  LOGAUT_CAR
} from "../constants";

//busca una orden de compra (carrito) mediante el id del usuario logueado

const fetchOrderCreator = (order) => ({
  type: FETCH_ORDER,
  order,
});

const fetchCarProductsCreator = (products) => ({
  type: FETCH_CAR_PRODUCTS,
  products,
});

const fetchOrdersCreator = orders => ({
    type:FETCH_ORDERS,
    orders
})

const logautCarCreator = orders => ({
  type:LOGAUT_CAR,
  orders
})



export const logautCar = () => dispatch =>{
  dispatch(logautCarCreator());
};


export const fetchOrder = userId => dispatch =>{
    axios.get(`/api/order/${userId}`)
    .then((res) => res.data)
    .then((order) => dispatch(fetchOrderCreator(order)));
};


export const fetchOrders = userId => dispatch =>{
    axios.get(`/api/order/completes/${userId}`)
    .then((res) => res.data)
    .then((order) => dispatch(fetchOrdersCreator(order)))
}

export const fetchCarProducts = userId => dispatch =>{
  console.log("fetchCarProducts")
    axios.get(`/api/car/${userId}`)
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)));
};

export const checkoutOrder = (userId, data) => (dispatch) => {
  axios.put(`/api/order/${userId}`, data).then(() => {
    fetchCarProducts(userId);
  });
};

export const updateCarProducts = (userId, prodId, data) => (dispatch) => {
  axios
    .put(`/api/car/${prodId}`, data)
    .then(() => axios.get(`/api/car/${userId}`))
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)));
};

export const updateStockProducts = (prodId, data) => (dispatch) => {
  axios.put(`/api/admin/products/${prodId}/editProduct`, data);
};

export const AddProductCar = (userId, prodId,data) => (dispatch) => {
  axios.post(`/api/car/add/${userId}/${prodId}`,data);
};

export const removeProductCar = (userId, prodId) => (dispatch) => {
  axios
    .delete(`/api/car/${prodId}`)
    .then(() => axios.get(`/api/car/${userId}`))
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)));
};
