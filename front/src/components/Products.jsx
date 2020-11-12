import React from 'react'
import {Link} from 'react-router-dom'
import {CardDeck,Card, Alert} from 'react-bootstrap'

export default function Products({products}) {
  
  
  return (
    <CardDeck>
       {products && products.length == 0 ? <Alert variant={'info'}>No hay resultados</Alert> : null}
       {products && products.map(product => (   
         <Link to={`/products/${product.id}`} key={product.id}>
           <Card className='cardw' key={product.id}>
           <Card.Img className='card-img' variant="top" src={product.image} />
           <Card.Body>
            <Card.Title>{product.name}</Card.Title>
             <Card.Text>
             </Card.Text>
           </Card.Body>
           <Card.Footer>
            <small className="text-muted">Stock: {product.stock}</small>
           </Card.Footer>
         </Card></Link>
       )) }
    </CardDeck>
  )
}
