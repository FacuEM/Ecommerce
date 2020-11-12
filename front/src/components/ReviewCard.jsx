import React from "react"
import {Form,Card}from"react-bootstrap"
import {FaStar} from "react-icons/fa"

const ReviewCard = ({review,date}) => {

  console.log(review)

return (
<div>
{
review && review.map((r) => 
    // <Form.Group >
    // <Form.Label key={r.id}><p>Calificación realizada por {user}</p></Form.Label><br/>  
    // {[...Array(r.stars)].map((star,i) => <label><FaStar  size={22}  color={"#ffc107"}/></label>)}<br/>
    // <Form.Label key={r.id}>{r.content}</Form.Label>
    // </Form.Group>)}
    <Card key={r.id}>
  <Card.Header>{r.user && r.user.name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>{[...Array(r.stars)].map((star,i) => <label><FaStar  size={22}  color={"#ffc107"}/></label>)}<br/></p>
      <p>
        {' '}
        {r.content}{' '}
      </p>
      <footer className="blockquote-footer">
        <p>Comentario creado el {r.createdAt.slice(0,10)}</p>
      </footer>
    </blockquote>
  </Card.Body>
</Card>)}
</div>
);
};

export default ReviewCard

{/* {!review ? <p>No hay reviews</p> : null} */}