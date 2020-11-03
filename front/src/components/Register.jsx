import React from "react"

export default ({handleSubmit, handleChange, name, email, password}) => (

    <div>
    <form onSubmit={handleSubmit}>
        <input id="name" value={name} placeholder="Name" onChange={handleChange}></input><br/>
        <input id="email" value={email} placeholder="Mail" onChange={handleChange}></input><br/>
        <input id="password" value={password} placeholder="Password" type="password" onChange={handleChange}></input><br/>
        <button>Submit</button>
        </form>
      <br/>
    </div>
)