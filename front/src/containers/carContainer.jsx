import React from 'react';
import { connect } from "react-redux"
import {fetchCarProducts,removeProductCar} from "../../redux/actionCreators/car"
import Cart from "../components/Cart"

class CarContainer extends React.Component {
  constructor() {
    super();
      this.removeHandler=this.removeHandler.bind(this)
    } 
    
    componentDidMount(){
        this.props.fetchCarProducts(this.props.user.id)
    }

  removeHandler(userId,pordID) {
    this.props.removeProductCar(userId,pordID)
  }

  render() {
    return (
      <Cart
      user={this.props.user}
      products={this.props.products}
      removeHandler={this.removeHandler}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products:state.car.carProducts,
    user:state.isLogged.logged
  };
};


const mapDispatchToProps = function(dispatch){
  return {
    fetchCarProducts:(userid)=>dispatch(fetchCarProducts(userid)),
    removeProductCar:(userId,prodId)=>dispatch(removeProductCar(userId,prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);