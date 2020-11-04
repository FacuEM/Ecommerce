import React from 'react';
import Register from "../components/Register"
import { connect } from "react-redux"
import {fetchLoggedUser, logOutUser} from "../../redux/actionCreators/loginUserCreator"
import Login from '../components/Login';

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        email: "",
        password: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickLogout = this.clickLogout.bind(this)
} 

    handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.id === "email"){
      this.setState({email:value})
    }
    if (evt.target.id === "password"){
      this.setState({password:value})
    }
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
      this.props.fetchLoggedUser(this.state)
      this.setState({
        email: "",
        password: ""
      })
    }

    clickLogout(){
    this.props.logOutUser()
    }

render() {
    return (
      <div>
      <Login
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      clickLogout = {this.clickLogout}
      email = {this.state.email}
      password = {this.state.password}
      />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = function(dispatch){
  return {
    fetchLoggedUser: (user) => {
        dispatch(fetchLoggedUser(user))
    },
    logOutUser: () => {
        dispatch(logOutUser())
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);