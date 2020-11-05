import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from "react-redux"
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
<<<<<<< HEAD
import LoginContainer from "../containers/LoginContainer"
import {fetchIsLogged} from "../../redux/actionCreators/loginUserCreator"
import CategoriesContainer from './CategoriesContainer';
=======
import CarContainer from "../containers/carContainer"
import LoginContainer from "../containers/LoginContainer"
import {fetchIsLogged} from "../../redux/actionCreators/loginUserCreator"
import CategoriesContainer from './CategoriesContainer';

>>>>>>> 33d9229c53cdbae61817a5147840e486850eb47b

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
        <Route path="/car" component={CarContainer}/>
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
