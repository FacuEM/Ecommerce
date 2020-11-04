import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from "react-redux"
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
import LoginContainer from "../containers/LoginContainer"
import {fetchIsLogged} from "../../redux/actionCreators/loginUserCreator"
import CategoriesContainer from './CategoriesContainer';

class Main extends React.Component {

  componentDidMount() {
    this.props.isLogged()
  }

  render(){
  return (
    <div>
      {/* <form>
      <input id="email" placeholder="Mail"></input>
        <input id="password" placeholder="Password" type="password"></input>
        <button>Login</button>
        <button> Logout </button>      
        </form> */}
        <NavbarContainer component={NavbarContainer}/>
      <Switch>
        <Route exact path="/" component={CategoriesContainer}/>
        <Route path="/register" component={RegisterContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </Switch>
      <Footer component={Footer}/>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
   isLogged: (user) => dispatch(fetchIsLogged(user))
 } 
}

export default connect(null, mapDispatchToProps)(Main);
