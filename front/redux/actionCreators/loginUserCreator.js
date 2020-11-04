import axios from "axios"
import {LOGIN_USER, LOGOUT_USER} from "../constants"

//LOGIN
const loggedUser = (userData) => ({type: LOGIN_USER, userData});

export const fetchLoggedUser = (data) => (dispatch) => {
    axios.post("/api/user/login", data)
    .then((res) => res.data)
    .then((user) => dispatch(loggedUser(user)))
};

//LOGOUT
const loggedOutUser = (userData) => ({type: LOGOUT_USER, userData});

export const logOutUser = (data) => (dispatch) => {
    axios.post("/api/user/logout", data)
    .then((res) => res.data)
    .then((user) => dispatch(loggedOutUser(user)))
};

//Sesión mantenida
export const fetchIsLogged = () => (dispatch) => {
    axios.get("/api/user/me").then((res) => {    
    console.log("RES DATA", res.data)
        return res.data})
    .then(user => dispatch(loggedUser(user)))
}