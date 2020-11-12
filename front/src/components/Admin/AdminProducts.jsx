import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct ,fetchAdminProducts} from "../../../redux/actionCreators/adminCreator";

import {Link} from 'react-router-dom'

class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descripcion: '',
      price:  0,
      stock: 0,
      categoryId: 0,
      image: ''
    };
    this.cambiarANum = this.cambiarANum.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  cambiarANum(state){
    return {...state, price: Number(state.price), stock: Number(state.stock), categoryId: Number(state.categoryId)}
  }

  componentDidMount(){
    this.props.fetchAdminProducts()
  }

  handleSubmit(e){ 
    e.preventDefault()
    let nuevoProd = this.cambiarANum(this.state)
    this.props.addProduct(nuevoProd)
    this.setState({name: '',
    descripcion: '',
    price:  0,
    stock: 0,
    categoryId: 0,
    image: ''})
  }

  handleChange(e){

    this.setState({[e.target.name] : e.target.value})
  }
  handleDelete(id){
    this.props.deleteProduct(id)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder='Prod Name'/>
          <input onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder='Prod Img Url'/>
          <input onChange={this.handleChange} type="text" name='descripcion' value={this.state.descripcion} placeholder='Prod Description'/>
          <input onChange={this.handleChange} type="text" name='price' value={this.state.price} placeholder='Prod Price (en pesos)'/>
          <input onChange={this.handleChange} type="text" name='stock' value={this.state.stock} placeholder='Prod Stock'/>
          <input onChange={this.handleChange} type="text" name='categoryId' value={this.state.categoryId} placeholder='Category ID'/>
          <button type='submit'>Add Product</button>
        </form>
        <br/>
        {this.props.products &&
          this.props.products.map((product) => {
            return (
              <div key={product.id}>
                <h3>product Id: {product.id}</h3>
                <p>product name :{product.name}</p>
                <p>product descript: {product.descripcion}</p>
                <Link to={`/admin/products/update/${product.id}`}>Update</Link>
                <button onClick={() => this.handleDelete(product.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    products: state.products.products
  };  
};

export default connect(maptStateToProps, {fetchAdminProducts, addProduct, deleteProduct})(AdminProducts);
