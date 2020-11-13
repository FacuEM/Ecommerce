import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCategory} from '../../redux/actionCreators/searchCreator';
import Products from '../components/Products';
import {AddProductCar} from "../../redux/actionCreators/car"


class ProductCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addToCart : 0
    }
    this.addProdudHandler = this.addProdudHandler.bind(this)
    this.ratingAvg = this.ratingAvg.bind(this)

  }


  addProdudHandler(prod){
    console.log("entro al evento")
    if(this.props.userId){
      this.props.AddProductCar(this.props.userId,prod.id)
    }else{
      const producto={...prod,units:1}
      const prueba=JSON.stringify(producto)
      localStorage.setItem(`${prod.name}`, prueba)
    }
    this.setState({addToCart : prod.id})
}


  componentDidMount(){
    this.props.fetchCategory(this.props.id)
  }


  ratingAvg(){
    const arr = []
    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    arr.push(this.props.reviews.map((review) => review.stars))
    return Math.round(arrAvg(arr[0]))
  }
  render() {
    return (
      <Products 
      products={this.props.categoryProducts}
      addProdudHandler={this.addProdudHandler}
      prodId = {this.state.addToCart}
      ratingAvg={this.ratingAvg}

      />
    )
  }
}

const mapStateToProps = (state,ownProps) =>({
  categoryProducts: state.products.categoryProducts,
  userId:state.isLogged.logged.id,
  reviews: state.reviews.reviews


})
const mapDispatchToProps = (dispatch,ownProps) =>({
    fetchCategory : (catId) => dispatch(fetchCategory(catId)),
    AddProductCar: (userId,prodId) => dispatch(AddProductCar(userId,prodId)),
    id: ownProps.match.params.id
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)
