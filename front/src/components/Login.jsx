import React from "react"
import { Link } from "react-router-dom"
import {Form,Button}from"react-bootstrap"

export default ({handleSubmit, handleChange, email, password}) => (
<div className="form">
    <Form  onSubmit={handleSubmit}>
    
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control id="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" value={password} onChange={handleChange}type="password" placeholder="Password" />
    </Form.Group>
    
    <Button variant="dark" type="submit">
        Submit
    </Button>
    </Form>
</div>
)
// style = {{width:"5px", height:"auto", display:"inline-block"}}

// <div>
    // <form onSubmit={handleSubmit}>
    //     <input id="email" value={email} placeholder="Mail" onChange={handleChange}></input><br/>
    //     <input id="password" value={password} placeholder="Password" type="password" onChange={handleChange}></input><br/>
    //     <button>Login</button>
    //     <Link onClick={clickLogout} to="/">Logout</Link>
    //     </form>
    //   <br/>
    // </div>