import React from 'react'
import {Form,Button}from"react-bootstrap"
import {FaStar} from "react-icons/fa"

export default ({handleSelect, handleInput, handleSubmit, content, stars})  => (
    
    <Form onSubmit={handleSubmit}>
      <Form.Label>Califica el producto</Form.Label><br/>
      <div>
      {[...Array(5)].map((star,i) =>{
        const starValue = 1 + i
        return( 
        <label>
          <input type="radio" name="rating" style={{display:"none"}} value={starValue} onChange={handleSelect}/>
          <FaStar 
            style={{cursor:"pointer", 
            transition: "color 200ms"}} 
            size={22} 
            color={starValue <= stars ? "#ffc107" : "#e4e5e9"}/>
        </label>
      )
      })}
      </div>
    <Form.Group>
        <Form.Label>Escribe una reseña</Form.Label>
        <Form.Control value={content} onChange={handleInput} placeholder="¡Contanos!" />
    </Form.Group>
    <Button variant="dark" type="submit">
        Submit
    </Button><br/>
  </Form>
  )





