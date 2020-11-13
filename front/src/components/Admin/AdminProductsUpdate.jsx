import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../../../redux/actionCreators/adminCreator";
import { fetchProduct } from "../../../redux/actionCreators/searchCreator";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class AdminProductsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      descripcion: "",
      price: 0,
      stock: 0,
      categoryId: 1,
      image: "",
    };
    this.booleano = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cambiarANum = this.cambiarANum.bind(this);
  }

  cambiarANum(state) {
    return {
      ...state,
      price: Number(state.price),
      stock: Number(state.stock),
      categoryId: Number(state.categoryId),
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.booleano = true;
    const id = this.props.id;
    let nuevoProd = this.cambiarANum(this.state);
    this.props.updateProduct(id, nuevoProd).then(() => {
      this.setState({
        name: "",
        descripcion: "",
        price: 0,
        stock: 0,
        categoryId: 1,
        image: "",
      });
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const product = this.props.product;
    return (

      

      <div style={{ color: "white", fontWeight: "750" }}>
        <h1 style={{ margin: "0 auto" }}>Edita el producto</h1>
        {product ? (
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <h3>{product.name}</h3>
            <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              placeholder={product.name}
            />
          </Form.Group>
        
          <Form.Group>
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="image"
              value={this.state.image}
              placeholder={product.image}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Descripcion</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="textarea"
              name="descripcion"
              value={this.state.descripcion}
              placeholder={product.descripcion}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="number"
              name="price"
              value={this.state.price}
              placeholder={product.price}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Stock</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="number"
              name="stock"
              value={this.state.stock}
              placeholder={product.stock}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Category ID</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="categoryId"
              value={this.state.categoryId}
              placeholder="Category ID"
            />
          </Form.Group>
            <Button variant="secondary" type="submit">Actualizar</Button>
          </Form>
        ) : null}
        {this.booleano ? (
          <Link to="/admin/products">
            Producto actualizado con exito..Go Back
          </Link>
        ) : null}
        <Link to="/admin/products">
            <Button variant="secondary">ADMIN PANEL</Button>
          </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.match.params.id,
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    updateProduct: (id, data) => dispatch(updateProduct(id, data)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return { product: state.products.selectedProduct };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductsUpdate);



{/* <form onSubmit={(e) => this.handleSubmit(e)}>
<h3>{product.name}</h3>
<input
  onChange={this.handleChange}
  type="text"
  name="name"
  value={this.state.name}
  placeholder={product.name}
/>
<input
  onChange={this.handleChange}
  type="text"
  name="descripcion"
  value={this.state.descripcion}
  placeholder={product.descripcion}
/>
<input
  onChange={this.handleChange}
  type="text"
  name="image"
  value={this.state.image}
  placeholder={product.image}
/>
<input
  onChange={this.handleChange}
  type="text"
  name="price"
  value={this.state.price}
  placeholder={product.price}
/>
<input
  onChange={this.handleChange}
  type="text"
  name="stock"
  value={this.state.stock}
  placeholder={product.stock}
/>
<input
  onChange={this.handleChange}
  type="text"
  name="categoryId"
  value={this.state.categoryId}
  placeholder={product.categoryId}
/>
<button type="submit">Actualizar</button>
</form>
) : null}
{this.booleano ? (
<Link to="/admin/products">
Producto actualizado con exito..Go Back
</Link>
) : null}
</div> */}