import axios from "axios"
import {FETCH_ORDER} from "../constants"

//busca una orden de compra (carrito) mediante el id del usuario logueado

const fetchOrderCreator = order => ({
    type:FETCH_ORDER,
    order
})

export const fetchOrder = userId => dispatch =>{
    axios.get(`/api/car/${userId}`)
    .then((res) => res.data)
    .then((order) => dispatch(fetchOrderCreator(order)))
}