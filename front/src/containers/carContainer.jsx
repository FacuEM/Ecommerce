import React from 'react';
import { connect } from "react-redux"
import {fetchOrder,removeProductCar} from "../../redux/actionCreators/car"
import Cart from "../components/Cart"

class CarContainer extends React.Component {
  constructor() {
    super();
      this.removeHandler=this.removeHandler.bind(this)
    } 
    
    componentDidMount(){
        this.props.fetchOrder(this.props.user.id)
    }

  removeHandler(userId,pordID) {
    this.props.removeProductCar(userId,pordID)
  }

  render() {
    return (
      <Cart
      user={this.props.user}
      order={this.props.order}
      removeHandler={this.removeHandler}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
      order:state.car.order,
      user:state.isLogged.logged
  };
};

const mapDispatchToProps = function(dispatch){
  return {
    fetchOrder:(userid)=>dispatch(fetchOrder(userid)),
    removeProductCar:(userId,prodId)=>dispatch(removeProductCar(userId,prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);