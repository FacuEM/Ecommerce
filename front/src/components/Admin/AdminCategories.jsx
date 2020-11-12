import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCategories} from "../../../redux/actionCreators/searchCreator";
import {addCategory, deleteCategory} from '../../../redux/actionCreators/adminCreator'
import {Link} from 'react-router-dom'

class AdminCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this)

    this.handleDelete = this.handleDelete.bind(this)
  }


  componentDidMount(){
    this.props.fetchCategories()
  }

  handleSubmit(e){ 
    e.preventDefault()
    this.props.addCategory(this.state)
    this.setState({
      name: '',
      image: ''})
  }
  handleChange(e){
    this.setState({[e.target.name] : e.target.value})
  }
  handleDelete(id){
    this.props.deleteCategory(id)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder='Category Name'/>
          <input onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder='Category Url'/>
          <button type='submit'>Add Product</button>
        </form>
        <br/>
        {this.props.categories &&
          this.props.categories.map((category) => {
            return (
              <div key={category.id}>
                <h3>Category Id: {category.id}</h3>
                <p>Category name :{category.name}</p>
                <Link to={`/admin/categories/update/${category.id}`}>Update</Link>
                <button onClick={() => this.handleDelete(category.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    categories: state.categories.categories
  };  
};

export default connect(maptStateToProps, {fetchCategories, addCategory, deleteCategory})(AdminCategories);
