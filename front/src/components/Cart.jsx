import React from "react"
import {Row,Col,Image,ListGroup,Card,Button,Form} from "react-bootstrap"

export default ({user,products,removeHandler}) => {

    //crea una variable con la suma total de los preccios de los productos en la lista
    // if(order.id){
    //     var totalCompra=order.products.reduce((x,y)=>x+y.price,0)
        
    // }
    
    
    return (<>
        <Col xs={4}>
            <Card
            bg='Light'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2 cardCar"
        >
            <Card.Header >{user.name} Cart</Card.Header>
            <Card.Body>
            <Card.Img variant="top"className="car-img" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png" />

            <Card.Title>Total de compra : 0$</Card.Title>
            <Button variant="outline-success">BUY UP <i class="far fa-credit-card"></i></Button>
            
            
            </Card.Body>
            </Card>
        </Col>
        <Col xs={8}>
            {products && products.map(prod=>{
                return <Row className="car-prod" key={prod.id}>
                            <Col xs={4}>
                            <Image className="car-img2" src={prod.product.image}  rounded />
                            </Col>
                            <Col xs={8}>
                            <ListGroup variant="flush">
                            <ListGroup.Item>Producto: {prod.name}</ListGroup.Item>
                            <ListGroup.Item>Precio: {prod.price}</ListGroup.Item>
                            <ListGroup.Item>Cantidad:
                                <Form.Control as="select" onClick={(e)=>console.log(e.target.value)}>
                                    <option onClick={()=>console.log(1)}>1</option>
                                    <option >2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </ListGroup.Item>
                            <ListGroup.Item >
                            <Button variant="outline-danger" onClick={()=>removeHandler(user.id,prod.id)}>Remove <i class="far fa-times-circle"></i></Button>

                            </ListGroup.Item>
                            </ListGroup>
                            </Col>
                        </Row>
                
                
                
            })}

        </Col>
    </>
)}