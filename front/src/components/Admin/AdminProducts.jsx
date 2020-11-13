import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct, fetchAdminProducts } from "../../../redux/actionCreators/adminCreator";
import { CardDeck, Card, Alert, Form, Button,ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descripcion: '',
      price: 0,
      stock: 0,
      categoryId: 0,
      image: ''
    };
    this.cambiarANum = this.cambiarANum.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  cambiarANum(state) {
    return { ...state, price: Number(state.price), stock: Number(state.stock), categoryId: Number(state.categoryId) }
  }

  componentDidMount() {
    this.props.fetchAdminProducts()
  }

  handleSubmit(e) {
    e.preventDefault()
    let nuevoProd = this.cambiarANum(this.state)
    this.props.addProduct(nuevoProd)
    this.setState({
      name: '',
      descripcion: '',
      price: 0,
      stock: 0,
      categoryId: 0,
      image: ''
    })
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value })
  }
  handleDelete(id) {
    this.props.deleteProduct(id)
  }

  render() {
    return (
      <div style={{ color: 'white', fontWeight: '750' }}>
        <h1 style={{margin: '0 auto'}}>AGREGAR UN NUEVO PRODUCTO</h1>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder='Prod Name' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Image</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder='Prod Img Url' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Descripcion</Form.Label>
            <Form.Control onChange={this.handleChange} type="textarea" name='descripcion' value={this.state.descripcion} placeholder='Prod Description' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control onChange={this.handleChange} type="number" name='price' value={this.state.price} placeholder='Prod Price (en pesos)' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Stock</Form.Label>
            <Form.Control onChange={this.handleChange} type="number" name='stock' value={this.state.stock} placeholder='Prod Stock' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Category ID</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" name='categoryId' value={this.state.categoryId} placeholder='Category ID' />
          </Form.Group>
            <Button variant="primary" type="submit">
            Agregar
           </Button>
           <br />
        </Form>
        <CardDeck>
          {this.props.products && this.props.products.length == 0 ? <Alert variant={'info'}>No hay resultados</Alert> : null}
          {this.props.products && this.props.products.map(product => (
           
              <Card className='cardw' key={product.id}>
                <Card.Img className='card-img' variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant='info'><Link to={`/admin/products/update/${product.id}`}>Update</Link></Button>
                  <Button variant='light'onClick={() => this.handleDelete(product.id)}>Delete</Button>
                </Card.Footer>
              </Card>
         
          ))}
        </CardDeck>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    products: state.products.products
  };
};

export default connect(maptStateToProps, { fetchAdminProducts, addProduct, deleteProduct })(AdminProducts);
