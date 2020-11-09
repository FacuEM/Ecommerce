import React from "react"

import {Form,Button, Alert}from"react-bootstrap";
import {Link} from 'react-router-dom'

export default ({errorState ,handleSubmit, handleChange, name, email, password}) => (


<div className="form">
<Form  onSubmit={handleSubmit}>
<h1>Register</h1>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control id ="name" value={name} onChange={handleChange} type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Email</Form.Label>
    <Form.Control id ="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control id ="password" value={password} onChange={handleChange} type="password" placeholder="Password" />
  </Form.Group>

  {errorState ?
    <Alert variant='danger'>
    Email ya existente.
    <br/>
    </Alert> : null }

    <Alert variant='info'>
    <Link to='/login'>Ya tengo una cuenta.</Link>
    </Alert>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</div>

)


