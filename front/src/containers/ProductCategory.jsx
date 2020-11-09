import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCategory} from '../../redux/actionCreators/searchCreator';
import Products from '../components/Products';

class ProductCategory extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchCategory(this.props.id)
  }
  render() {
    return (
      <Products products={this.props.categoryProducts} />
    )
  }
}

const mapStateToProps = (state,ownProps) =>({
  categoryProducts: state.products.categoryProducts,
})
const mapDispatchToProps = (dispatch,ownProps) =>({

    fetchCategory : (catId) => dispatch(fetchCategory(catId)),
    id: ownProps.match.params.id
  

})
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)
