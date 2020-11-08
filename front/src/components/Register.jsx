import React from "react"

import {Form,Button}from"react-bootstrap"

export default ({handleSubmit, handleChange, name, email, password}) => (


<div className="form">
<Form  onSubmit={handleSubmit}>
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
  
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</div>

)


