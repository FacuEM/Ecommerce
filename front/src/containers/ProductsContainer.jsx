import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class ProductsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    const {products} = this.props
    return (
      <div>
       {products ? products.map((p) => 
       <div key={p.id}>
         <h2>{p.name}</h2>
         <p>${p.price}</p>
         <Link to={`/products/${p.id}`}> Ver mas </Link>
       </div>) : null}
      </div>
    )
  }
}

