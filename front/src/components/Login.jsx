import React from "react"
import { Link } from "react-router-dom"

export default ({handleSubmit, handleChange, clickLogout, email, password}) => (
    <div className="row text-black">
    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
      <h1 className="display-4 py-2 text-truncate">Log In</h1>
      <div className="px-2">
          <form onSubmit={handleSubmit} className="justify-content-center">
              <div className="form-group">
                  <label className="sr-only">Email</label>
                  <input id="email" type="text" className="form-control" placeholder="Mail" value={email}  onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <label className="sr-only">Contraseña</label>
                  <input id="password" type="password" className="form-control"  placeholder="Password" value={password} onChange={handleChange}/>
              </div>
              <button type="submit" className="btn btn-dark btn-lg" >Log In</button>
              <div style = {{width:"10px", height:"auto", display:"inline-block"}}></div>
              <Link to="/">
              <button type="submit" className="btn btn-dark btn-lg" onClick={clickLogout} margin="5px">Log Out </button>
              </Link>
          </form>
      </div>
    </div>
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