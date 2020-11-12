import React from "react"
import {Form,Button,Col,Jumbotron, OverlayTrigger,Tooltip} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default ({complete,products,handleSubmit,handleChange,direccion,metodo,city,zip,state,total})=>{
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          sure you want to complete the purchase?
        </Tooltip>
      );
    return(<>
        {complete ? 
        ( <Jumbotron>
            <h1>Successful Purchase</h1>
            <p>
                le estara llegando un correo con los datos de su compra!!
            </p>
            <p>
                <Button variant="outline-info" className="mr-2">Mis Compras</Button> 
                <Link to='/'><Button variant="outline-info" className="mr-2">Home</Button></Link>
            </p>
        </Jumbotron>) 
        : 
        (<Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label>Payment method</Form.Label>
                    <Form.Control id='metodo' as="select" defaultValue={metodo} onChange={handleChange}>
                        <option>Cash</option>
                        <option>Creditcar</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Total</Form.Label>
                    <Form.Control type="text"  value={total ? (total + " $") : "0 $" } placeholder="Total" disabled/>
                    </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" id='direccion' value={direccion} onChange={handleChange} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label>City</Form.Label>
                    <Form.Control id='city' value={city} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>State</Form.Label>
                    <Form.Control id='state' value={state} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control id='zip' value={zip} onChange={handleChange}/>
                    </Form.Group>
                </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="seguro que quieres gastar tanta guita?" />
            </Form.Group>
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Button variant="outline-success" type="submit" disabled={products[0] ? false : true}>
                    BUY <i class="far fa-credit-card"></i>
                </Button>
            </OverlayTrigger>
        </Form>)}
       
        
        </>
    )
}



