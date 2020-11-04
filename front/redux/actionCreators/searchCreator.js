import axios from "axios";
import { FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_CATEGORIES } from "../constants";

const fetchProductCreator = (data) => ({ type: FETCH_PRODUCT, data });
const fetchProductsCreator = (data) => ({ type: FETCH_PRODUCTS, data });

const fetchCategoriesCreator = (data) => ({ type: FETCH_CATEGORIES, data });

export const fetchProducts = (input) => (dispatch) => {
  axios.get(`/api/products/products/?name=${input}`).then((prods) => {
    dispatch(fetchProductsCreator(prods));
  });
};

export const fetchCategories = () => (dispatch) => {
  console.log("cat action");
  axios.get("/api/category/categories").then((categories) => {
    dispatch(fetchCategoriesCreator(categories));
  });
};
