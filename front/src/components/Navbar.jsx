import React from "react"
import { Link } from 'react-router-dom';
import {Navbar,Nav,Form,Button,FormControl, Dropdown} from 'react-bootstrap'
import {CartDash} from "react-bootstrap-icons"
import ParticleEffectButton from 'react-particle-effect-button'


export default ({hidden, hanledValue, inputHandler, value, user, clickLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>eCOMMERce</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
        {user.type ? <Link to="/admin"><Nav.Link href="/">Panel Admin</Nav.Link></Link>
         : null}
        <Link to="/categories"><Nav.Link href="/categories">Categories</Nav.Link></Link>
    </Nav>
    <Form inline onSubmit={e=> inputHandler(e)}>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" value={value} 
        onChange={e=>hanledValue(e.target.value)}/>
      <Button disabled={!value} variant="outline-info" className="mr-2" type='submit' >Search</Button>
    </Form>
    
    {user.id ? 
    (<>
    <Link to="/car"><Button variant="outline-light" className="mr-2"><CartDash/></Button></Link>
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        ¡Bienvenido, {user.name}!
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mis Compras</Dropdown.Item>
        <Link to="/"><Dropdown.Item variant="outline-danger" onClick={clickLogout}>Logout</Dropdown.Item></Link>
       </Dropdown.Menu>
     </Dropdown>
    </>)
    :
    (<>
    <Link to="/register"><Button variant="outline-light" className="mr-2">Register</Button></Link>
    <Link to="/login"><Button variant="outline-light" className="mr-2">Login</Button></Link>
    </>)
    }
    
  </Navbar>
)}




