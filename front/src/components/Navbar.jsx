import React from "react"

export default ({handleClick}) => (
    <div>
    <img src=""/>
    <button>Register</button>
    <button>Login</button>
    <button>Logout</button>
    <form>
    <input type="text"/>
    <button onClick={(e) => handleClick(e)}>Buscar</button>
    </form>
    <br/>
    </div>
)