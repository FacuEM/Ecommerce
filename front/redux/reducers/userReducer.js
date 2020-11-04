import {LOGIN_USER, LOGOUT_USER} from "../constants"

const initialState = {};

export default function login (state = initialState, action) {
switch (action.type) {
  case LOGIN_USER: 
    return action.userData 
  case LOGOUT_USER:
    return {}
  default: 
    return state;
}
}