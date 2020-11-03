import {LOGIN_USER} from "../constants"

const initialState = { 
    loggedUser: {}
};

export default function login (state = initialState, action) {
switch (action.type) {
  case LOGIN_USER: 
    return {...state, loggedUser: action.userData} 
  default: 
    return state;
}
}