import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchProduct} from "../../redux/actionCreators/searchCreator"
import SingleProduct from "../components/SingleProduct"
import {AddProductCar} from "../../redux/actionCreators/car"
import ReviewContainer from "../containers/ReviewContainer"

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToCart : false
    }

    this.addProdudHandler=this.addProdudHandler.bind(this)
  }

  componentDidMount(){
    
    this.props.fetchProduct(Number(this.props.id))

  }
  addProdudHandler(prodId){
    this.props.AddProductCar(this.props.userId,prodId)
    this.setState({addToCart : true})
  }

  render() {

    return (
      <div>
        <SingleProduct
         pText = {this.state.addToCart}
         productSelected = {this.props.product} 
         addProdudHandler={this.addProdudHandler}
        />
        <ReviewContainer/>
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch){
  
  return {
    fetchProduct:(id)=>{dispatch(fetchProduct(id))},
    AddProductCar: (userId,prodId) => dispatch(AddProductCar(userId,prodId))
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    product: state.products.selectedProduct,
    id: ownProps.match.params.id,
    userId:state.isLogged.logged.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);


