import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom';
import {connect} from "react-redux"
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
import CarContainer from "../containers/carContainer"
import LoginContainer from "../containers/LoginContainer"
import CategoriesContainer from './CategoriesContainer';
import ProductCategory from '../containers/ProductCategory';
import {Row,Container} from 'react-bootstrap'
import ProductsContainer from './ProductsContainer'
import SingleProductContainer from './SingleProductContainer'
import {fetchUser} from "../../redux/actionCreators/userValidation"
import {fetchOrder} from '../../redux/actionCreators/car'
import Home from '../components/home'

//Admin
import AdminContainer from '../containers/AdminContainer'
import AdminUser from '../components/Admin/AdminUser'



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
            <Route exact path="/" component={Home}/>
            <Route exact path="/admin" component={AdminContainer}/>
            <Route exact path="/admin/users" component={AdminUser}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/car" component={CarContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route exact path="/products/:id" component={SingleProductContainer} />
            <Route path="/products" component={ProductsContainer}/>
            <Route path='/categories/:id' component={ProductCategory} />
            <Route exact path="/categories" component={CategoriesContainer}/>
            <Redirect from="/" to="/" />
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
