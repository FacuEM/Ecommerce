import axios from "axios"
import {LOGIN_USER} from "../constants"

const loggedUser = (userData) => ({type: LOGIN_USER, userData});

export const fetchLoggedUser = (data) => (dispatch) => {
    axios.post("/api/login", data)
    .then((res) => res.data)
    .then((user) => dispatch(loggedUser(user)))
};