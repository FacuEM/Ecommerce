import React, { Component } from "react";

import { connect } from "react-redux";
import 
  {fetchAdminUserOrders}
 from "../../../redux/actionCreators/adminCreator";

class AdminUserOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAdminUserOrders(this.props.id)
  }
  render() {
    return (
      <div>
       {this.props.orders &&
          this.props.orders.map((order) => {
            return (
              <div key={order.id}>
                <h2>Order Id: {order.id}</h2>
                <p>Direccion: {order.direccion}</p>
                <p>Total: {order.total}</p>
                <ul>
            {order.carproducts.map((prod) => <li>{prod.name}</li>)}
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    orders: state.admin.userOrders,
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    id:ownProps.match.params.id,
    fetchAdminUserOrders: (id) => dispatch(fetchAdminUserOrders(id)),
    
 } 
}

export default connect(maptStateToProps, mapDispatchToProps)(AdminUserOrders);