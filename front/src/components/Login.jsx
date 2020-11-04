import React from "react"
import { Link } from "react-router-dom"

export default ({handleSubmit, handleChange, clickLogout, email, password}) => (

    <div>
    <form onSubmit={handleSubmit}>
        <input id="email" value={email} placeholder="Mail" onChange={handleChange}></input><br/>
        <input id="password" value={password} placeholder="Password" type="password" onChange={handleChange}></input><br/>
        <button>Login</button>
        <Link onClick={clickLogout} to="/">Logout</Link>
        </form>
      <br/>
    </div>
)
