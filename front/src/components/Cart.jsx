import React from "react"
import {Row,Col,Image,ListGroup,Card,Button,Form} from "react-bootstrap"
import {Link} from 'react-router-dom'

export default ({user,products,removeHandler,unitsHandler}) => {

    //crea una variable con la suma total de los preccios de los productos en la lista
    if(products){
        var totalCompra=products.reduce((x,y)=>x+y.cost,0)
        
    }
    
    
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

            <Card.Title>Total de compra : {totalCompra ? totalCompra : 0}$</Card.Title>
            <Link to='/car/checkout'>
                <Button variant="outline-success" disabled={products[0] ? false : true}>
                    BUY UP <i class="far fa-credit-card"></i>
                </Button>
            </Link>
            
            
            
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
                            <ListGroup.Item>Cantidad: {prod.units}
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                                onClick={e=>unitsHandler(user.id,prod.id,{units:e.target.value})}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
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