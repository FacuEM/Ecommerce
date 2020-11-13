import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchAdminOrders } from '../../../redux/actionCreators/adminCreator'

class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.productoDestacado = this.productoDestacado.bind(this)
  }

  componentDidMount() {
    this.props.fetchAdminOrders()
  }

  productoDestacado(orders){
    return orders.map((order) => {
      return order.carproducts.map((prod)=>{
         return prod.name
      })
    })
  }

  render() {
    let prodDestacado
    if(this.props.orders){
      prodDestacado = this.productoDestacado(this.props.orders).flat()
    }
    console.log(prodDestacado)
    return (
      <div>
        {this.props.orders &&
          this.props.orders.map((order) => {
            return (
              <div key={order.id}>
                <h2>Order Id: {order.id}</h2>
                <p>User Id:{order.userId}</p>
                <p>Direccion: {order.direccion}</p>
                <p>Total: {order.total}</p>
                <ul>
              {order.carproducts.map((prod) => <li>{prod.name}</li>)}
                </ul>
              </div>
            );
          })}
          <h1>PRODUCTO DESTACADO: {prodDestacado.length > 0 ? prodDestacado[0] : null}</h1>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    orders: state.admin.orders,
  };
};

export default connect(maptStateToProps, { fetchAdminOrders })(AdminOrders);