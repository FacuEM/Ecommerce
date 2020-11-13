import React, { Component } from "react";
import { Link } from "react-router-dom";
//import AdminPanel from '../components/Admin/AdminPanel'
import { fetchUsers } from "../../redux/actionCreators/adminCreator";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class AdminContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>ADMIN PANEL</h1>

        <CardDeck>
          <Link to="/admin/users">
            <Card>
              <Card.Body>
                <Card.Title>Users</Card.Title>
                <Card.Text>Administrar usuarios</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">-eCOMMERce - Admin</small>
              </Card.Footer>
            </Card>
          </Link>
          <Link to="/admin/products">
            <Card>
              <Card.Body>
                <Card.Title>Productos</Card.Title>
                <Card.Text>Administrar productos</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">-eCOMMERce - Admin</small>
              </Card.Footer>
            </Card>
          </Link>
          <Link to="/admin/categories">
            <Card>
              <Card.Body>
                <Card.Title>Categorias</Card.Title>
                <Card.Text>Administrar categorias</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">-eCOMMERce - Admin</small>
              </Card.Footer>
            </Card>
          </Link>
          <Link to="/admin/orders">
            <Card>
              <Card.Body>
                <Card.Title>Ordenes</Card.Title>
                <Card.Text>Administrar Ordenes</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">-eCOMMERce - Admin</small>
              </Card.Footer>
            </Card>
          </Link>
        </CardDeck>
      </div>
    );
  }
}

export default connect(null, { fetchUsers })(AdminContainer);
