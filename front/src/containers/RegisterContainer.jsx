import React from 'react';
import Register from "../components/Register"
import { connect } from "react-redux"
import {register, setError} from "../../redux/actionCreators/userValidation"

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        password: "",
        errorState: false
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
    this.setState({errorState: false})
    this.props.setError()
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
      this.props.register(this.state).then(() => this.setState({
        name: "",
        email: "",
        password: ""
      })).then(() => {
        if(!this.props.error) {this.props.history.push('/login')}
        else {
          this.setState({errorState: true})
        }
      })
      
    }

render() {
    return (
      <div>
      <Register
      errorState = {this.state.errorState}
      error = {this.props.error}
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

const mapStateToProps = function (state) {
  return {
    error: state.isLogged.error
  };
};


export default connect(mapStateToProps, {register, setError})(RegisterContainer);

