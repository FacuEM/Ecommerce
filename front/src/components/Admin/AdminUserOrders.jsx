import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { connect } from "react-redux";
import { fetchAdminUserOrders } from "../../../redux/actionCreators/adminCreator";

class AdminUserOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAdminUserOrders(this.props.id);
  }
  render() {
    return (
      <CardGroup>
        {this.props.orders &&
          this.props.orders.map((order) => {
            return (
              <div key={order.id}>
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Header>Nro de orden : {`${order.id}`}</Card.Header>
                  <Card.Text>Direccion : {`${order.direccion}`}</Card.Text>
                  <Card.Title>Total : {`${order.total}`}</Card.Title>
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
                </Card>
              </div>
            );
          })}
      </CardGroup>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    orders: state.admin.userOrders,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.match.params.id,
    fetchAdminUserOrders: (id) => dispatch(fetchAdminUserOrders(id)),
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(AdminUserOrders);
