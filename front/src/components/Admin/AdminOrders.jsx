import React, { Component } from "react";
import { Card, CardGroup, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAdminOrders } from "../../../redux/actionCreators/adminCreator";

class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.productoDestacado = this.productoDestacado.bind(this);
    this.prodFinal = this.prodFinal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdminOrders();
  }

  productoDestacado(orders) {
    return orders.map((order) => {
      return order.carproducts.map((prod) => {
        return prod.name;
      });
    });
  }

  prodFinal(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }

  render() {
    let prodDestacado;
    if (this.props.orders) {
      prodDestacado = this.prodFinal(
        this.productoDestacado(this.props.orders).flat()
      );
    }
    console.log(prodDestacado);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <CardGroup>
          {this.props.orders &&
            this.props.orders.map((order) => {
              return (
                <div key={order.id}>
                  <Card border="dark" style={{ width: "18rem" }}>
                    <Card.Header>Nro de orden : {`${order.id}`}</Card.Header>
                    <Card.Body>
                      <Card.Title>Id Usuario : {`${order.userId}`}</Card.Title>
                      <Card.Text>Direccion : {`${order.direccion}`}</Card.Text>
                      <Card.Text>
                        Productos :
                        {
                          <ul>
                            {order.carproducts.map((prod) => (
                              <li>{prod.name}</li>
                            ))}
                          </ul>
                        }
                      </Card.Text>
                      <Card.Title>Total : {`${order.total}`}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </CardGroup>
        <div>
          <Alert variant="dark">
            Producto destacado :{" "}
            <strong style={{ textTransform: "uppercase" }}>
              {prodDestacado}
            </strong>
          </Alert>
        </div>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    orders: state.admin.orders,
  };
};

export default connect(maptStateToProps, { fetchAdminOrders })(AdminOrders);
