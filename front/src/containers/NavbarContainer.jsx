import React from 'react';
import { connect } from "react-redux"
import {fetchProducts} from '../../redux/actionCreators/searchCreator'
import ProductsContainer from '../containers/ProductsContainer'

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

this.inputHandler = this.inputHandler.bind(this)
} 

inputHandler(e) {
  e.preventDefault()
  this.props.fetchProducts(this.state.value)
  this.setState({value: ''})
}

render() {
    return ( 
      <div>
        <form onSubmit={(e) => this.inputHandler(e)}>
          <input type="text" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
          <button type='submit'>Buscar</button>
          <ProductsContainer products={this.props.products.data}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products.products
  };
};



export default connect(mapStateToProps, {fetchProducts})(NavbarContainer);