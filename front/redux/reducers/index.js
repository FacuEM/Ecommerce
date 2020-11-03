import { combineReducers } from 'redux';
import registerReducer from "../reducers/registerReducer"
import userReducer from "../reducers/userReducer"

export default combineReducers({
    register: registerReducer,
    login: userReducer
});