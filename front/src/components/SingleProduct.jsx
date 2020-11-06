import React from 'react'
import { Basket } from 'react-bootstrap-icons';
import {Container, Row,Col, Card, ListGroup,Button} from 'react-bootstrap'


export default ({productSelected,addProdudHandler}) => (
  <div>
    {productSelected.id && 
    <Container className='mt-5'>
    <Row md="auto">
      <Col md="auto" >
        <Card style={{ width: "16rem" }}>
          <Card.Img md ="auto" variant="top" src={productSelected.image} />
        </Card>
      </Col>
      <Col >
        <ListGroup>
          <ListGroup.Item>
            <h2>{productSelected.name.toUpperCase()}</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Descripcion:</strong> {productSelected.descripcion}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Stock:</strong> {productSelected.stock}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>precio</strong> {`${productSelected.price},00`}
          </ListGroup.Item>
          <ListGroup.Item>
          <Button variant="dark" onClick={()=>addProdudHandler(productSelected.id)}>Agregar al carrito <Basket/></Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    <br/>

  </Container>
     }
    </div>
);


 