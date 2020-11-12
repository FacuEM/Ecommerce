import axios from "axios"
import {FETCH_ORDERS,FETCH_SELECT_ORDERS,FETCH_ORDER,FETCH_CAR_PRODUCTS} from "../constants"

//busca una orden de compra (carrito) mediante el id del usuario logueado

const fetchOrderCreator = order => ({
    type:FETCH_ORDER,
    order
})


const fetchCarProductsCreator = products => ({
    type:FETCH_CAR_PRODUCTS,
    products
})



export const fetchOrder = userId => dispatch =>{
    axios.get(`/api/order/${userId}`)
    .then((res) => res.data)
    .then((order) => dispatch(fetchOrderCreator(order)))
}

export const fetchCarProducts = userId => dispatch =>{
    axios.get(`/api/car/${userId}`)
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)))
}


export const checkoutOrder = (userId,data) => dispatch =>{
    axios.put(`/api/order/${userId}`,data)
    .then(()=>{
        fetchCarProducts(userId)
    })
}


export const updateCarProducts = (userId,prodId,data) => dispatch =>{
    axios.put(`/api/car/${prodId}`,data)
    .then(() => axios.get(`/api/car/${userId}`))
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)))
}

export const updateStockProducts = (prodId,data) => dispatch =>{
    axios.put(`/api/admin/products/${prodId}/editProduct`,data)
}


export const AddProductCar = (userId,prodId) => dispatch =>{
    axios.put(`/api/car/add/${userId}/${prodId}`)
    
}


export const removeProductCar = (userId,prodId) => dispatch =>{
    axios.delete(`/api/car/${prodId}`)
    .then(() => axios.get(`/api/car/${userId}`))
    .then((res) => res.data)
    .then((products) => dispatch(fetchCarProductsCreator(products)))
}