import React from "react"
import {Form,Button, Alert, Spinner}from"react-bootstrap"
import {Link} from 'react-router-dom'

export default ({errorState , error, isLoading, handleSubmit, handleChange, email, password}) => (
<div className="form">
    <Form  onSubmit={handleSubmit}>
        <h1>Login</h1>
    <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control id="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group >
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" value={password} onChange={handleChange}type="password" placeholder="Password" />
    </Form.Group>
    <Alert variant='info'>
    <Link to='/register'>Crear nueva cuenta.</Link>
    </Alert>
    <Button variant="dark" type="submit">
        Submit
    </Button>
    <br/>
    <br/>
    {errorState && (!error ? isLoading ? 
    <Alert variant='success'>
    Cargando... 
    <Spinner animation="border" variant="info" className={'spiner'}/>
    <br/>
    </Alert> 
    : null : 
    <Alert variant='danger'>
    Usuario o password incorrectos.
    <br/>
    </Alert> )}
    </Form>
</div>
)
