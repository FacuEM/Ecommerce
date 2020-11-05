import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from "react-redux"
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
import CarContainer from "../containers/carContainer"
import LoginContainer from "../containers/LoginContainer"
import CategoriesContainer from './CategoriesContainer';



import {Row,Container} from 'react-bootstrap'
import ProductsContainer from './ProductsContainer'
import SingleProductContainer from './SingleProductContainer'

import {fetchIsLogged} from "../../redux/actionCreators/loginUserCreator"


class Main extends React.Component {

  componentDidMount() {
    this.props.isLogged()
  }

  render(){
  return (
    <div>
      <NavbarContainer history={this.props.history}/>
      <Container>
        <Row className="justify-content-md-center">
          <Switch>
            <Route exact path="/" component={CategoriesContainer}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/car" component={CarContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route exact path="/products/:id" component={SingleProductContainer} />
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
