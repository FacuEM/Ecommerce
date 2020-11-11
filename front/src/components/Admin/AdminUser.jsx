import React, { Component } from "react";

import { connect } from "react-redux";
import {
  upgradeUser,
  downgradeUser,
} from "../../../redux/actionCreators/adminCreator";

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.users &&
          this.props.users.map((user) => {
            return (
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
            );
          })}
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
})(AdminUser);
