import React from 'react';
import { connect } from "react-redux";
import {fetchCategory} from '../../redux/actionCreators/searchCreator'
import Products from '../components/Products'


class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
} 

componentDidMount(){
    console.log('Comp did mount pCategory')
    this.props.fetchCategory(this.props.id)
}

render() {
    console.log('props nuevo container', this.props)
    return (
        <Products products={this.props.categoryProducts}/>   
    );
  }
}


const mapStateToProps = (state) => ({
    categoryProducts : state.products.categoryProducts
});

const mapDispatchToProps = function(dispatch,ownProps){
    return {
        fetchCategory : (catId) => dispatch(fetchCategory(catId)),
        id : ownProps.match.params.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductCategory);


