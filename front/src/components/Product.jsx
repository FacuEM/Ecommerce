import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchProduct} from '../../redux/actionCreators/searchCreator'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.fetchProduct(Number(this.props.id))
  }
  

  render() {
    const {product} = this.props;
    return (
      <div>
        {product ? <div>
          <h1>{product.name}</h1>
        <p>Descripcion: {product.descripcion}</p>
        <img src='https://images.unsplash.com/photo-1604585021329-bbad6b4d5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
          <p>Precio: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <button>Agregar al carrito</button>
        </div> : null}
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    product: state.products.selectedProduct.data,
    id: ownProps.match.params.id
  };
};

export default connect(mapStateToProps, {fetchProduct})(Product);
