import React from "react"
import { Link } from 'react-router-dom';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'

export default ({ hanledValue,inputHandler, value, user,clickLogout }) =>{ 

    return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
    <Navbar.Brand>eCOMMERce</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
        <Link to="/categories"><Nav.Link href="/categories">Categories</Nav.Link></Link>
    </Nav>
    <Form inline onSubmit={e=> inputHandler(e)}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={value} 
        onChange={e=>hanledValue(e.target.value)}/>
      <Button variant="outline-info" type='submit' >Search</Button>
    </Form>
    
   
    {user.id ? 
    <Button variant="outline-danger" onClick={clickLogout}>Logout</Button> :
    (<>
    <Link to="/register"><Button variant="outline-light">Register</Button></Link>
    <Link to="/login"><Button variant="outline-light">Login</Button></Link>
    </>)
    }
  </Navbar>
)}




