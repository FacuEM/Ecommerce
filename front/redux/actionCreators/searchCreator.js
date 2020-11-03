import axios from "axios"
import {FETCH_PRODUCT} from "../constants"
import {FETCH_PRODUCTS} from "../constants"

const fetchProductCreator = (data) => ({type: FETCH_PRODUCT, data});
const fetchProductsCreator = (data) => ({type: FETCH_PRODUCTS, data});

export const fetchProducts = (input) => (dispatch) => {
    axios.get(`/api/products/products/name=?${input}`).then((prods) => {
        dispatch(fetchProductsCreator(prods))
    })
}

