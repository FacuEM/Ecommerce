import React from "react"
import {Row,Col,Image,ListGroup,Card,Button,Form,Tooltip,OverlayTrigger} from "react-bootstrap"
import {Link} from 'react-router-dom'

export default ({user,products,removeHandler,unitsHandler,productLocalStore,eventRemove,eventUnits,total}) => {

    //crea una variable con la suma total de los preccios de los productos en la lista
    if(products[0]){
        var totalCompra=products.reduce((x,y)=>x+y.cost,0)
    }
   

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Sure to remove the product of the car?
        </Tooltip>
    );

    //verifica si hay usuario conectado, y devuelve un booleano si el stock es mayor al numero pasado por parametro, evita que se pueda pedir mas productos que los existentes
    const loginOrLocal= (obj,n)=>{
        if(obj.product) return obj.product.stock >= n ? false : true
       
        return obj.stock >= n ? false : true
    }

    const productsMap= (prod) =>{
        return <Row className="car-prod" key={prod.id}>
                    <Col xs={4}>
                    <Image className="car-img2" src={prod.product ? prod.product.image : prod.image}  rounded />
                    </Col>
                    <Col xs={8} >
                    <ListGroup variant="flush" className='columnaCarrito'>
                    <ListGroup.Item>Producto: {prod.name}</ListGroup.Item>
                    <ListGroup.Item>Precio: {prod.price}</ListGroup.Item>
                    <ListGroup.Item>Cantidad: {prod.units}
                    <Form.Control
                        as="select"
                        className="mr-sm-2 "
                        id="inlineFormCustomSelect"
                        custom
                        onClick={e=>
                            user.id ? unitsHandler(user.id,prod.id,{units:e.target.value}) : eventUnits(prod.id,e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2" disabled={loginOrLocal(prod,2)}>2</option>
                        <option value="3" disabled={loginOrLocal(prod,3)}>3</option>
                        <option value="4" disabled={loginOrLocal(prod,4)}>4</option>
                        <option value="5" disabled={loginOrLocal(prod,5)}>5</option>
                        <option value="6" disabled={loginOrLocal(prod,6)}>6</option>
                        <option value="7" disabled={loginOrLocal(prod,7)}>7</option>
                        <option value="8" disabled={loginOrLocal(prod,8)}>8</option>
                        <option value="9" disabled={loginOrLocal(prod,9)}>9</option>
                        <option value="10" disabled={loginOrLocal(prod,10)}>10</option>
                    </Form.Control>
                    </ListGroup.Item>
                    <ListGroup.Item >
                    <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 100, hide: 400 }}
                    overlay={renderTooltip}
                    >
                        <Button variant="outline-danger" onClick={()=>
                        user.id ? removeHandler(user.id,prod.id) : eventRemove(prod.name)
                            }>
                                Remove <i class="far fa-times-circle"></i></Button>
                    </OverlayTrigger>
                    </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
        
        
        
    }
   
    
    return (<>
        <Col xs={4}>
            <Card
            bg='Light'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2 cardCar"
        >
          <Card.Header>{user.name} Cart</Card.Header>
          <Card.Body>
            <Card.Img
              variant="top"
              className="car-img"
              src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png"
            />

            <Card.Title>Total de compra : {totalCompra ? totalCompra : total}$</Card.Title>

           
            <Link to={user.id ? '/car/checkout' : '/login'}>
                <Button variant="outline-success" disabled={(products[0] || productLocalStore[0]) ? false : true}>
                    BUY UP <i class="far fa-credit-card"></i>
                </Button>
            </Link>
            
            
            
            </Card.Body>
            </Card>
        </Col>
        <Col xs={8}>
            {user.id ? (products && products.map(productsMap)) : productLocalStore.map(productsMap)}
            

        </Col>
    </>)
   
}

