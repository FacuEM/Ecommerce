import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchAdminOrders } from '../../../redux/actionCreators/adminCreator'

class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAdminOrders()
  }
  render() {
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
              </div>
            );
          })}
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