import React, {useState} from "react"
import {Form,Button}from"react-bootstrap"
import { Display } from "react-bootstrap-icons";
import {FaStar} from "react-icons/fa"

const Review = () => {

const [rating, setRating] = useState(null)
const [hover, setHover] = useState(null)

return (
<div className="form">
<Form>
    <div>
    {[...Array(5)].map((star,i) => {
    const ratingValue = i+1;
    return (
    <label>
        <input style={{ display: "none" }} type="radio" name="rating" value={ratingValue} onClick={() => {
            setRating(ratingValue)}} />
        <FaStar style={{cursor: "pointer", transition: "color 200ms"}} color= {ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} className="star" size={22} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() =>  setHover(null)}/>
    </label>
    )
    })}
    </div>
  <Form.Group >
    <Form.Label>Agregar reseña</Form.Label>
    <Form.Control id ="review" type="text" placeholder="¡Contanos!" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</div>
);
};

export default Review