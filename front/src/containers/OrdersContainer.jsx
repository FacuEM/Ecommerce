import React from 'react';
import { connect } from "react-redux"
import {fetchOrders} from "../../redux/actionCreators/car"
import Orders from "../components/Orders"

class OrdersContainer extends React.Component {
  constructor() {
    super();
     
    } 
    
    componentDidMount(){
        this.props.fetchOrders(this.props.user.id)
    }
  

  render() {
    return (
      <Orders
      user={this.props.user}
      orders={this.props.orders}  
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    orders:state.car.orders,
    user:state.isLogged.logged
  };
};


const mapDispatchToProps = function(dispatch){
  return {
    fetchOrders:(userid)=>dispatch(fetchOrders(userid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);