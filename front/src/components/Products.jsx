import React from 'react'
import {Link} from 'react-router-dom'
import {CardDeck,Card, Alert,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import {FaStar} from "react-icons/fa"

export default function Products({products,ratingAvg,addProdudHandler,prodId}) {
    return (
      <CardDeck>
        {products && products.length == 0 ? <Alert variant={'info'}>No hay resultados</Alert> : null}
        {products && products.map(product => (   
                  
         
          <Card style={{ width: '18rem' }} key={product.id} bg='light' className='car-prod' >
             <Link to={`/products/${product.id}`} key={product.id}>
            <Card.Img variant="top" className='card-img' src={product.image} />
            <ListGroup >
              <ListGroupItem variant="light" ><b>{(product.name).toUpperCase()}</b></ListGroupItem>
              <ListGroupItem variant="light">Price: {product.price}</ListGroupItem>
            </ListGroup>
            </Link>
            <Card.Body>
            <Button  variant="outline-info" className="mr-2" disabled={product.stock ? false : true}
            onClick={(e) =>addProdudHandler(product)}
            ><i class="fas fa-cart-plus"></i></Button>
              {prodId ===product.id ? 
              <Button variant="success" disabled className='addCar'>
              {product.name} agregado al carrito.
              </Button> 
              : null}
            </Card.Body>
          </Card>
         
                )) }
      </CardDeck>
  )
}


