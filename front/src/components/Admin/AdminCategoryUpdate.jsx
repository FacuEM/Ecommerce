import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCategory} from '../../../redux/actionCreators/searchCreator'
import { Link } from 'react-router-dom'
import { updateCategory } from "../../../redux/actionCreators/adminCreator";
import { Form, Button } from "react-bootstrap";

class AdminProductsUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '' 
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }



 componentDidMount() {
  
      this.props.fetchCategory(this.props.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.booleano = true
        const id = this.props.id
        this.props.updateCategory(id, this.state).then(() => {
            this.setState({
                name: '',
                image: ''
            })
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    } 

    render() {
      const category = this.props.category 
        return (
            <div>
                <h1>Edit Category</h1>
                {category ?
                   <Form onSubmit={(e) => this.handleSubmit(e)}>
                   <Form.Group>
                       <Form.Label>Category Name</Form.Label>
                       <Form.Control onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder={category.name}/>
                     </Form.Group>
                     <Form.Group>
                       <Form.Label>Category Url</Form.Label>
                       <Form.Control onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder={category.image}/>
                     </Form.Group>
                     <Button variant="primary" type="submit">
            Actualizar
          </Button>
                    </Form> :
                    null}
                {this.booleano ? <Link to='/admin/categories'>Categoria actualizado con exito..Go Back</Link> : null}    
            </div> 
          
        )
    }
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        id: ownProps.match.params.id,
        fetchCategory: (id) => dispatch(fetchCategory(id)),
        updateCategory: (id, data) => dispatch(updateCategory(id, data))
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return { category: state.categories.category }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsUpdate);