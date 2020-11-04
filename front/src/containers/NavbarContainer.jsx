import React from 'react';
import { connect } from "react-redux"
import {fetchProducts} from '../../redux/actionCreators/searchCreator'
import Products from '../components/Products'

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

this.inputHandler = this.inputHandler.bind(this)
} 

//Lógica del Navbar y del carrito

inputHandler(e) {
  e.preventDefault()
  this.props.fetchProducts(this.state.value)
}

render() {
    return ( 
      <div>
        <form onSubmit={(e) =>this.inputHandler(e)}>
          <input type="text" onChange={(e) => this.setState({value: e.target.value})}/>
          <Products products={this.props.products}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products
  };
};

const mapDispatchToProps = function(dispatch){
  return {fetchProducts : (products) => dispatch(fetchProducts(products))}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);