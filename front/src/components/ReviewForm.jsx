import React from 'react'


export default ({handleSelect, handleInput, handleSubmit, stars, content})  => (

    <form onSubmit={handleSubmit}>
      <select value={stars} onChange={handleSelect}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    <input value={content} onChange={handleInput}></input>
    <button>Submit</button>
   
  </form>
  
  )





