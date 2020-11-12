import React from 'react';
import { connect } from "react-redux"
import {fetchCarProducts,removeProductCar,updateCarProducts} from "../../redux/actionCreators/car"
import Cart from "../components/Cart"

const productLocalStore=[]
for(let produc in localStorage){
    if(produc === "length") break
    const p=JSON.parse(localStorage.getItem(produc))
    p.units=1
    productLocalStore.push(p)
}
console.log("aqui",productLocalStore)
class CarContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      productLocalStore : productLocalStore
    }
      this.removeHandler=this.removeHandler.bind(this)
      this.unitsHandler=this.unitsHandler.bind(this)
      this.eventRemove=this.eventRemove.bind(this)
      this.eventUnits=this.eventUnits.bind(this)
    } 
    
    componentDidMount(){
        this.props.fetchCarProducts(this.props.user.id)
        const productLocalStore=[]
        for(let produc in localStorage){
            if(produc === "length") break
            const p=JSON.parse(localStorage.getItem(produc))
            p.units=1
            productLocalStore.push(p)
        }
        this.setState({productLocalStore})
    }

  removeHandler(userId,pordID) {
    this.props.removeProductCar(userId,pordID)
  }

  unitsHandler(userId,pordID,data) {
    this.props.updateCarProducts(userId,pordID,data)
  }
  eventRemove (name){
    localStorage.removeItem(name)
    const productLocalStore=[]
    for(let produc in localStorage){
    if(produc === "length") break
    const p=JSON.parse(localStorage.getItem(produc))
    p.units=1
    productLocalStore.push(p)
    }
    this.setState({productLocalStore})
  }
  eventUnits(id,n){
    this.state.productLocalStore.forEach(prod=>{
        if(prod.id == id){
            prod.units=n
            localStorage.setItem(prod.name,JSON.stringify(prod))
        }
    })
    const productLocalStore=[]
    for(let produc in localStorage){
    if(produc === "length") break
    const p=JSON.parse(localStorage.getItem(produc))
    p.units=1
    productLocalStore.push(p)
    }
    this.setState({productLocalStore})
  }

  render() {
    console.log(this.state.productLocalStore)
    return (
      <Cart
      user={this.props.user}
      products={this.props.products}
      removeHandler={this.removeHandler}
      unitsHandler={this.unitsHandler}
      productLocalStore={this.state.productLocalStore}
      eventRemove={this.eventRemove}
      eventUnits={this.eventUnits}
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