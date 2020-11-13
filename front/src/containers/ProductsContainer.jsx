import React from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux'
import {AddProductCar} from "../../redux/actionCreators/car"
import { fetchReviews} from '../../redux/actionCreators/reviewCreator'




class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);
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


  ratingAvg(){
    const arr = []
    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    arr.push(this.props.reviews.map((review) => review.stars))
    return Math.round(arrAvg(arr[0]))
  }

    render(){
    return <Products 
    products={this.props.products}
    addProdudHandler={this.addProdudHandler}
    prodId = {this.state.addToCart}
    ratingAvg={this.ratingAvg}



    />
        }
}


const mapStateToProps = (state,ownProps) =>({
    products: state.products.products,
    userId:state.isLogged.logged.id,
    reviews: state.reviews.reviews

    })

const mapDispatchToProps = function(dispatch){
  
    return {
      AddProductCar: (userId,prodId) => dispatch(AddProductCar(userId,prodId)),
      fetchReviews:(id) =>{dispatch(fetchReviews(id))} 
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
