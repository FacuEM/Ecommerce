import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCategories} from "../../../redux/actionCreators/searchCreator";
import {addCategory, deleteCategory} from '../../../redux/actionCreators/adminCreator'
import {Link} from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";

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
       
       <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder='Category Name'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Category Url</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder='Category Url'/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar
          </Button>
          </Form>

        <br/>
        {this.props.categories &&
          this.props.categories.map((category) => {
            return (

              <Card style={{ width: "18rem" }} key={category.id}>
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
              <Card.Body>
                <Button variant="info">
                  <Link to={`/admin/categories/update/${category.id}`}>
                    Update
                  </Link>
                </Button>
                <Button
                  variant="light"
                  onClick={() => this.handleDelete(category.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>

              
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

