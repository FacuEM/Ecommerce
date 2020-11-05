import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from "react-redux"
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
import CarContainer from "../containers/carContainer"
import LoginContainer from "../containers/LoginContainer"
import {fetchIsLogged} from "../../redux/actionCreators/loginUserCreator"
import CategoriesContainer from './CategoriesContainer';
import SingleProduct from "../components/SingleProduct"
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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
      <Container>
        <Row>
        <Route exact path="/" component={CategoriesContainer}/>
        </Row>
        <Route path="/register" component={RegisterContainer}/>
        <Route path="/car" component={CarContainer}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/products/1" component={SingleProduct}/>
      </Container>
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
