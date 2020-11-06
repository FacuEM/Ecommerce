import React from 'react'
import { Route, Switch } from 'react-router-dom';
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

import {fetchUser} from "../../redux/actionCreators/userValidation"
import {fetchOrder} from '../../redux/actionCreators/car'


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchUser().then(() => {
      if(this.props.user.id) this.props.fetchOrder(this.props.user.id)
    })
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

const mapStateToProps = function(state) {
  return {
      user:state.isLogged.logged
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    history:ownProps.history,
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchOrder:(userid)=>dispatch(fetchOrder(userid))
 } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
