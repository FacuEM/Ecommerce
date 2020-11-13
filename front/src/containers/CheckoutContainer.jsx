import React from 'react';
import { connect } from "react-redux"
import {fetchCarProducts,checkoutOrder,updateStockProducts} from "../../redux/actionCreators/car"
import BuyUp from "../components/BuyUp"
import{ init,send } from 'emailjs-com';
init("user_uNLSGcdttPeTRMBs14PGz")

// API keys
// User ID
// user_uNLSGcdttPeTRMBs14PGz
// Access Token
// 7f3e73330d80db5498679df6a0c5f964

// lucasnovaroh@gmail.com

class CheckoutContainer extends React.Component {
  constructor() {
    super();
        this.state = {
            direccion: "",
            metodo: "Cash",
            city:'',
            zip:'',
            state:'',
            total: 0,
            complete:false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 
    


    componentDidMount(){
        this.props.fetchCarProducts(this.props.user.id)
        const totalCompra=this.props.products.reduce((x,y)=>x+y.cost,0)
        if(this.state.total !==totalCompra){
          this.setState({total:totalCompra})
        }

    }


    handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.id === "direccion"){
          this.setState({direccion:value})
        }
        if (evt.target.id === "metodo"){
          this.setState({metodo:value})
        }
        if (evt.target.id === "city"){
            this.setState({city:value})
          }
        if (evt.target.id === "state"){
        this.setState({state:value})
        }
        if (evt.target.id === "zip"){
            this.setState({zip:value})
        }
    }
    handleSubmit(evt) {
        evt.preventDefault();
       
        const dataUpdate={
          pending:false,
          direccion:this.state.direccion,
          total:this.state.total,
          metodo:this.state.metodo
        }
        const dataEmail={
          userEmail:this.props.user.email,
          userName:this.props.user.name,
          direccion:this.state.direccion,
          total:this.state.total,
          metodo:this.state.metodo
        }
        this.props.checkoutOrder(this.props.user.id,dataUpdate)

        send('default_service','template_0zdxepa',dataEmail)

        this.setState({
            direccion: "",
            metodo: "Cash",
            city:'',
            zip:'',
            state:'',
            total:0,
            complete:true
        })
        this.props.products.map((prod)=>{
          const newStock= prod.product.stock - prod.units
          this.props.updateStockProducts(prod.productId,{stock:newStock})
        })
    }


  render() {
    return (
      <BuyUp
      user={this.props.user}
      total={this.state.total}
      products={this.props.products}
      direccion={this.state.direccion}
      metodo={this.state.metodo}
      state={this.state.state}
      zip={this.state.zip}
      city={this.state.city}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      complete={this.state.complete}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products:state.car.carProducts,
    user:state.isLogged.logged,
  };
};


const mapDispatchToProps = function(dispatch){
  return {
    fetchCarProducts:(userId)=>dispatch(fetchCarProducts(userId)),
    checkoutOrder:(userId,data)=>dispatch(checkoutOrder(userId,data)),
    updateStockProducts:(prodId,data)=>dispatch(updateStockProducts(prodId,data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);