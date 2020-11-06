import React from "react"
import { Link } from 'react-router-dom';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
import {CartDash} from "react-bootstrap-icons"


export default ({ hanledValue,inputHandler, value, user,clickLogout }) =>{ 

    return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
    <Navbar.Brand>eCOMMERce</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
       {/*  <Link to="/categories"><Nav.Link href="/categories">Categories</Nav.Link></Link> */}
    </Nav>
    <Form inline onSubmit={e=> inputHandler(e)}>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" value={value} 
        onChange={e=>hanledValue(e.target.value)}/>
      <Button variant="outline-info" className="mr-2" type='submit' >Search</Button>
    </Form>
    
   
    {user.id ? 
    (<>
    <Link to="/car"><Button variant="outline-light" className="mr-2"><CartDash/></Button></Link>
    <Button variant="outline-danger" className="mr-2" onClick={clickLogout}>Logout</Button>
    </>)
    :
    (<>
    <Link to="/register"><Button variant="outline-light" className="mr-2">Register</Button></Link>
    <Link to="/login"><Button variant="outline-light" className="mr-2">Login</Button></Link>
    </>)
    }
    
  </Navbar>
)}




