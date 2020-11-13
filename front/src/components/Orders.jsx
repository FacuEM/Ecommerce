import React from 'react'
import {Link} from 'react-router-dom'
import {Accordion,Card,ListGroup} from 'react-bootstrap'


export default ({user,orders})=>{
    return(
        <>
         <Card bg='secondary'>
            <Card.Img variant="top" id='orders-img' src="https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
            <Card.Title id='ordersTitle'>
            list of completed purchase orders
            </Card.Title>
            </Card.Body>
        </Card>
        <Accordion defaultActiveKey="0" className='orders'>
            {orders && orders.map((O,i)=>{
                return  <Card key={O.id} bg='info'>
                            <Accordion.Toggle as={Card.Header} eventKey={i+1}>
                                Orders N°{O.id} Date : {O.createdAt.slice(0,10)}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i+1}>
                            <Card.Body >
                            <ListGroup variant="flush">
                                <ListGroup.Item  variant="success">Payment method : {O.metodo}</ListGroup.Item>
                                <ListGroup.Item  variant="success">Adress : {O.direccion}</ListGroup.Item>

                                <ListGroup.Item variant="success">
                                    Products : 
                                        <ListGroup horizontal >
                                            <ListGroup.Item className='orderProd'> Product name :</ListGroup.Item>
                                            <ListGroup.Item className='orderProd'>Units :</ListGroup.Item>
                                            <ListGroup.Item className='orderProd'>Price :</ListGroup.Item>
                                        </ListGroup>

                                        {O.carproducts.map(p=>{
                                            return  <ListGroup horizontal>
                                                        <ListGroup.Item className='orderProd'>{p.name}</ListGroup.Item>
                                                        <ListGroup.Item className='orderProd'>{p.units}</ListGroup.Item>
                                                        <ListGroup.Item className='orderProd'>{p.price} $</ListGroup.Item>
                                                    </ListGroup>
                                        })}
                                </ListGroup.Item>
                                
                                <ListGroup.Item  variant="success">Total : {O.total} $</ListGroup.Item>
                                
                                
                            </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
            })}
           
           
        </Accordion>
        </>
    )
}
  
 