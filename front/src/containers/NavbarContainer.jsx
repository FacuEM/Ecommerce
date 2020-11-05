import React from 'react';
import { connect } from "react-redux"
import {fetchProducts} from '../../redux/actionCreators/searchCreator'
import Navbar from '../components/Navbar'
import {logOutUser} from "../../redux/actionCreators/loginUserCreator"

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

this.inputHandler = this.inputHandler.bind(this)
this.hanledValue=this.hanledValue.bind(this)
this.clickLogout=this.clickLogout.bind(this)
} 

inputHandler(e) {
  e.preventDefault()
  this.props.fetchProducts(this.state.value)
  this.setState({value: ''})
  this.props.history.push("/products")
}

hanledValue(value){
  this.setState({value})
}
clickLogout(){
  this.props.logOutUser()
  }

render() {
    return ( 
      <div>
        <Navbar
        hanledValue={this.hanledValue}
        inputHandler={this.inputHandler}
        value={this.state.value}
        user={this.props.user}
        clickLogout={this.clickLogout}
        />
        {/* <form onSubmit={(e) => this.inputHandler(e)}>
          <input type="text" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
          <button type='submit'>Buscar</button>
          <Products products={this.props.products.data}/>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products.products,
    user:state.login //se usara para definir que botones se ven dependiendo si se esta logueado o no
  };
};

const mapDispatchToProps = function(dispatch,ownProps){
  return {
    history:ownProps.history, //objeto proporcionado por react en el main para poder redireccionar
    fetchProducts : (products) => dispatch(fetchProducts(products)),
    logOutUser: () => dispatch(logOutUser())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);