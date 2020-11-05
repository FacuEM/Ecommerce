import React from "react"
// 

export default ({handleSubmit, handleChange, name, email, password}) => (

<div className="row text-black">
  <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
    <h1 className="display-4 py-2 text-truncate">Registro</h1>
    <div className="px-2">
        <form onSubmit={handleSubmit} className="justify-content-center">
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
</div>

)

// <div>
  //   <Col >
  //   <Form >
  //   <Form.Group controlId="formBasicEmail">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //     <Form.Text className="text-muted">
  //       We'll never share your email with anyone else.
  //     </Form.Text>
  //   </Form.Group>
  
  //   <Form.Group controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group controlId="formBasicCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>
  // </Col>
  // </div>