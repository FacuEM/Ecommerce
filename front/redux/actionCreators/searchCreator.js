import axios from "axios";
import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
} from "../constants";

const fetchProductCreator = (data) => ({ type: FETCH_PRODUCT, data });
const fetchProductsCreator = (data) => ({ type: FETCH_PRODUCTS, data });


const fetchCategoriesCreator = (data) => ({ type: FETCH_CATEGORIES, data });

const fetchCategoryCreator = (data) => ({ type: FETCH_CATEGORY, data });

export const fetchProducts = (input) => (dispatch) => {
  axios.get(`/api/products/?name=${input}`).then((prods) => {
    dispatch(fetchProductsCreator(prods));
  });
};

export const fetchProduct = (id) => (dispatch) => {
  axios
    .get(`/api/products/${id}`)
    .then((res) => res.data)
    .then((prod) => {
      dispatch(fetchProductCreator(prod));
    });
};

export const fetchCategories = () => (dispatch) => {
  axios.get("/api/category/categories").then((categories) => {
    dispatch(fetchCategoriesCreator(categories));
  });
};

export const fetchCategory = (id) => (dispatch) => {
  axios.get(`/api/products/categories/${id}`).then((products) => {
    dispatch(fetchCategoryCreator(products.data));
  });
};
