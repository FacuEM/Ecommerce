import React from 'react';
import {Link } from 'react-router-dom'
import { connect } from "react-redux";
import {fetchCategories, fetchCategory} from '../../redux/actionCreators/searchCreator'


class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this)
} 
componentDidMount() {
  this.props.fetchCategories()
}
handleClick(id) {
  this.props.fetchCategory(id)
}

render() {
    return (
      <div>
         {this.props.categories ? this.props.categories.map((c) => <button onClick={() => this.handleClick(c.id)} key={c.id}>{c.name}</button>) : null}
         {this.props.products ? this.props.products.map((p) => <li key={p.id}>{p.name}</li>) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories.data,
  products: state.products.categoryProducts.data
});

export default connect(mapStateToProps, {fetchCategories, fetchCategory} )(CategoriesContainer);