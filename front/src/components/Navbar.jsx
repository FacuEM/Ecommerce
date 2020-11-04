import React from "react"
import { Link } from 'react-router-dom';

export default ({ handleClick }) => (
    <div>
        <img src="" />
        <button>Register</button>
        <button>Login</button>
        <button>Logout</button>
        <form>
            <input type="text" />
            <button onClick={(e) => handleClick(e)}>Buscar producto</button>
        </form>
        <br/>
    </div>
)