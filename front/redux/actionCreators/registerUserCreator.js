import axios from "axios"
import {REGISTER_USER} from "../constants"

//REGISTER
const createdUser = (user) => ({
    type: REGISTER_USER,
    user
    });
    
export const createUser = (user) => (dispatch) => {
console.log("ACTION CRATOR", user)
axios.post(`/api/user/register`, user).then(res => (res.data))
.then(registerInfo => dispatch(createdUser(registerInfo)));
}