import React from 'react';
import { connect } from "react-redux"
import {fetchCarProducts,removeProductCar,updateCarProducts} from "../../redux/actionCreators/car"
import Cart from "../components/Cart"


class CarContainer extends React.Component {
  constructor() {
    super();
      this.removeHandler=this.removeHandler.bind(this)
      this.unitsHandler=this.unitsHandler.bind(this)
    } 
    
    componentDidMount(){
        this.props.fetchCarProducts(this.props.user.id)
    }

  removeHandler(userId,pordID) {

    this.props.removeProductCar(userId,pordID)
  }

  unitsHandler(userId,pordID,data) {
    this.props.updateCarProducts(userId,pordID,data)
  }

  render() {
    return (
      <Cart
      user={this.props.user}
      products={this.props.products}
      removeHandler={this.removeHandler}
      unitsHandler={this.unitsHandler}
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
    removeProductCar:(userId,prodId)=>dispatch(removeProductCar(userId,prodId)),
    updateCarProducts:(userId,prodId,data)=>dispatch(updateCarProducts(userId,prodId,data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);