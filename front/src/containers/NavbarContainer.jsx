import React from 'react';
import { connect } from "react-redux"
import {fetchProducts} from '../../redux/actionCreators/searchCreator'
import Navbar from '../components/Navbar'
import {logout} from "../../redux/actionCreators/userValidation"

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      errorText : ''
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
  if(value){
  return this.setState({value})
  } else {
  return this.setState({errorText : 'Busqueda incorrecta'})
  }
}
clickLogout(){
  this.props.logout()
  }

render() {
    return ( 
      <div>
        <Navbar
        errorText={this.state.errorText}
        hanledValue={this.hanledValue}
        inputHandler={this.inputHandler}
        value={this.state.value}
        user={this.props.isLogged}
        clickLogout={this.clickLogout}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products.products,
    isLogged: state.isLogged.logged //se usara para definir que botones se ven dependiendo si se esta logueado o no
  };
};

const mapDispatchToProps = function(dispatch,ownProps){
  return {
    history:ownProps.history, //objeto proporcionado por react en el main para poder redireccionar
    fetchProducts : (products) => dispatch(fetchProducts(products)),
    logout: () => dispatch(logout())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);