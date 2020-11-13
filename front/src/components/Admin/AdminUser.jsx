import React, { Component } from "react";

import { connect } from "react-redux";
import {
  upgradeUser,
  downgradeUser,
  fetchUsers,
} from "../../../redux/actionCreators/adminCreator";

import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>E-Mail</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users &&
              this.props.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.type ? "admin" : "not admin"}</td>
                    {user.type ? (
                      <button onClick={() => this.props.downgradeUser(user.id)}>
                        Downgrade user
                      </button>
                    ) : (
                      <button onClick={() => this.props.upgradeUser(user.id)}>
                        Upgrade user
                      </button>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Link to="/admin">
          <Button variant="secondary">ADMIN PANEL</Button>
        </Link>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

export default connect(maptStateToProps, {
  upgradeUser,
  downgradeUser,
  fetchUsers,
})(AdminUser);

/*
<div key={user.id}>
                  <h2>User Id: {user.id}</h2>
                  <p>User name :{user.name}</p>
                  <p>User email :{user.email}</p>
                  <p>Admin: {user.type ? "admin" : "not admin"}</p>
                  {user.type ? (
                    <button onClick={() => this.props.downgradeUser(user.id)}>
                      Downgrade user
                    </button>
                  ) : (
                    <button onClick={() => this.props.upgradeUser(user.id)}>
                      Upgrade user
                    </button>
                  )}
                </div>

                */
