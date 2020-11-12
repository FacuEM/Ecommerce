import React from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux'

const mapStateToProps = (state,ownProps) =>({
<<<<<<< HEAD
products: state.products.products.data,
reviews: state.reviews.reviews
=======
    products: state.products.products,
>>>>>>> 3f8bdce74559c1c017ec7572d7d548fd877b6e46
})

class ProductsContainer extends React.Component {
    
constructor (props){
    super(props);
    this.state = {}
    this.ratingAvg = this.ratingAvg.bind(this)
}

componentDidMount(){
this.ratingAvg()
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
ratingAvg={this.ratingAvg}
/>
    }
}

export default connect(mapStateToProps, null)(ProductsContainer)
