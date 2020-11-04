import React from 'react';
import {Link } from 'react-router-dom'
import Categories from '../components/Categories';
import { connect } from "react-redux";
import {fetchCategories} from '../../redux/actionCreators/searchCreator'


class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
} 
componentDidMount() {
  this.props.fetchCategories()
}



render() {
    return (
      <div>
      <Categories categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories.data,
});


const mapDispatchToProps = function(dispatch){
  return {fetchCategories : () => dispatch(fetchCategories())}
}

export default connect(mapStateToProps, mapDispatchToProps )(CategoriesContainer);