import React from 'react';
import Register from "../components/Register"
import { connect } from "react-redux"
import {login} from "../../redux/actionCreators/userValidation"
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
      this.props.login(this.state)
      this.setState({
        email: "",
        password: ""
      })
      this.props.history.push('/')
    }

    clickLogout(){
    this.props.logOutUser()
    }

render() {
  console.log('login' , this.props)
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




export default connect(null, {login})(LoginContainer);