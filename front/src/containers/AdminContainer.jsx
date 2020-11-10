import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import AdminPanel from '../components/Admin/AdminPanel'


export class AdminContainer extends Component {

  render() {
    return (
      <div>
        <h1>ADMIN PANEL</h1>
        <Link to="/admin/users">User</Link>
        <Link to = "/admin/product">Products</Link>
        <Link to = "/admin/categories">Categories</Link>
        <Link to = "/admin/orders">Orders</Link>
      </div>
    )
  }
}

export default AdminContainer
