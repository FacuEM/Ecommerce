import React from 'react';
import Register from "../components/Register"
import { connect } from "react-redux"
import {createUser} from "../../redux/actionCreators/registerUserCreator"

class RegisterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        email: "",
        password: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
} 

    handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.id === "name"){
      this.setState({name:value})
    }
    if (evt.target.id === "email"){
      this.setState({email:value})
    }
    if (evt.target.id === "password"){
      this.setState({password:value})
    }
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
      this.props.createUser(this.state)
      this.setState({
        name: "",
        email: "",
        password: ""
      })
    }

render() {
    return (
      <div>
      <Register
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      name = {this.state.name}
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
    createUser: (user) => {
        dispatch(createUser(user))
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);