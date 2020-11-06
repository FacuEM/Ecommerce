import React from "react"
// 

import {Form,Button}from"react-bootstrap"

export default ({handleSubmit, handleChange, name, email, password}) => (


<div className="form">
<Form  onSubmit={handleSubmit}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control id ="name" value={name}onChange= {handleChange}type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Email</Form.Label>
    <Form.Control id ="email" value={email}onChange= {handleChange}type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control id ="password" value={password}onChange= {handleChange} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</div>

)

{/* <div className="row text-black">
  <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
    <h1 className="display-4 py-2 text-truncate">Registro</h1>
    <div className="px-2">
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label className="sr-only">Name</label>
                <input id="name" type="text" className="form-control" value={name} placeholder="Name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label className="sr-only">Email</label>
                <input id="email" type="text" className="form-control" placeholder="Mail" value={email}  onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label className="sr-only">Contraseña</label>
                <input id="password" type="password" className="form-control"  placeholder="Password" value={password} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-dark btn-lg">Registro</button>
        </form>
    </div>
  </div>
</div> */}
