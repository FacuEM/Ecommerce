import React from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux'



const mapStateToProps = (state,ownProps) =>({
    products: state.products.products.data,
})
const mapDispatchToProps = dispatch =>({
})

class  ProductsContainer extends React.Component {
    

    render(){
        return <Products 
                    products={this.props.products}
                />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
