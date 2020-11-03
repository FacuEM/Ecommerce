import React from 'react';
import { connect } from "react-redux"
import {fetchProducts} from '../../redux/actionCreators/searchCreator'

class NavbarContainer extends React.Component {
  constructor() {
    super();

this.handleClick = this.handleClick.bind(this)
this.inputHandler = this.inputHandler.bind(this)
} 

//Lógica del Navbar y del carrito

inputHandler(e) {
  e.preventDefault()
  this.props.fetchProducts(e.target.value)
}

render() {
    return ( 
      <div>
        <form onSubmit={this.inputHandler}>
          <input type="text"/>
          <button></button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = function(dispatch){
  return {fetchProducts : (products) => dispatch(fetchProducts(products))}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);