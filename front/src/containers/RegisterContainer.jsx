import React from 'react';
import Register from "../components/Register"
import { connect } from "react-redux"
import {register} from "../../redux/actionCreators/userValidation"

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
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
      this.props.register(this.state)
      this.setState({
        name: "",
        email: "",
        password: ""
      })
      this.props.history.push('/login')
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




export default connect(null, {register})(RegisterContainer);

