import React from 'react';
import { connect } from "react-redux"
import { login, fetchError } from "../../redux/actionCreators/userValidation"
import Login from '../components/Login';


class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickLogout = this.clickLogout.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.id === "email") {
      this.setState({ email: value })
    }
    if (evt.target.id === "password") {
      this.setState({ password: value })
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ isLoading: true })
    this.props.login(this.state).then(() => {
      if (this.props.isLogged.id) {
        if (this.props.error) {
          this.props.fetchError()
        }
        this.props.history.push('/')
        this.setState({
          email: "",
          password: "",
          isLoading: false,
        })
      }
      if (this.props.error) {
        return this.setState({
          email: "",
          password: "",
          isLoading: false,
        })
      }
    })
  }

  clickLogout() {
    this.props.logOutUser()
  }

  render() {
    return (
      <div>
        <Login
          error={this.props.error}
          isLoading={this.state.isLoading}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clickLogout={this.clickLogout}
          email={this.state.email}
          password={this.state.password}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    isLogged: state.isLogged.logged, //se usara para definir que botones se ven dependiendo si se esta logueado o no
    error: state.isLogged.error
  };
};


export default connect(mapStateToProps, { login, fetchError })(LoginContainer);