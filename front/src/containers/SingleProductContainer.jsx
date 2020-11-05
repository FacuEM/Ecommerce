import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchProduct} from "../../redux/actionCreators/searchCreator"
import SingleProduct from "../components/SingleProduct"

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    
    this.props.fetchProduct(Number(this.props.id))
    console.log("COMPONENT DID MOUNT",this.props.product)
  }
  

  render() {
    console.log('THIS PROPS',this.props)
    return (
      <div>
        
        <SingleProduct
         productSelected = {this.props.product} 
        />
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch){
  
  return {fetchProduct:(id)=>{dispatch(fetchProduct(id))}}
}

const mapStateToProps = function(state, ownProps) {
  return {
    product: state.products.selectedProduct,
    id: ownProps.match.params.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);


