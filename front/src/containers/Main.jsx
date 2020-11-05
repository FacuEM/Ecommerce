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
import {Row,Container} from 'react-bootstrap'
import ProductsContainer from './ProductsContainer'


class Main extends React.Component {

  componentDidMount() {
    this.props.isLogged()
    console.log("main histiry",this.props.history)
  }

  render(){
    console.log("main histiry",this.props.history)
  return (
    <div>
      {/* <form>
      <input id="email" placeholder="Mail"></input>
        <input id="password" placeholder="Password" type="password"></input>
        <button>Login</button>
        <button> Logout </button>      
        </form> */}
      <NavbarContainer history={this.props.history}/>
      <Container>
        <Row className="justify-content-md-center">
          <Switch>
            <Route exact path="/" component={CategoriesContainer}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/car" component={CarContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/products" component={ProductsContainer}/>
          </Switch>
        </Row>
      </Container>
      <Footer component={Footer}/>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    history:ownProps.history,
   isLogged: (user) => dispatch(fetchIsLogged(user))
 } 
}

export default connect(null, mapDispatchToProps)(Main);
