import React from 'react'
import {Carousel} from 'react-bootstrap'

export default ()=> {
    return (
        <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
              rounded
            />
            <Carousel.Caption>
              <h3>Compra desde la comodidad de tu hogar</h3>
              <p>La tienda online numero 1 del pais</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
              rounded={true}
            />

            <Carousel.Caption  className='text-dark'>
              <h3>Black friday</h3>
              <p>Aprovecha las ofertas y descuentos especiales</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3505699/pexels-photo-3505699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
              rounded
            />

            <Carousel.Caption >
              <h3>Gran variedad de productos</h3>
              <p>Consigue todo lo que necesitas para tu hogar en un solo lugar</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        </>
    )
}
