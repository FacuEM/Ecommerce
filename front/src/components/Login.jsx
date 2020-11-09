import React from "react"
import {Form,Button, Alert}from"react-bootstrap"

export default ({error, isLoading, handleSubmit, handleChange, email, password}) => (
<div className="form">
    <Form  onSubmit={handleSubmit}>
    <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control id="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group >
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" value={password} onChange={handleChange}type="password" placeholder="Password" />
    </Form.Group>
    {!error ? isLoading ? 
    <Alert variant='info'>
    Cargando...
    <br/>
    </Alert> 
    : null : 
    <Alert variant='danger'>
    Usuario o password incorrectos.
    <br/>
    </Alert> }
    <Button variant="dark" type="submit">
        Submit
    </Button>
    </Form>
</div>
)
