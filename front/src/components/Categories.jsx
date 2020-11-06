import React from 'react'
import {Card} from 'react-bootstrap'

export default ({categoriesP})=> {
    return (
        <>
          {categoriesP && categoriesP.map(categori=>(
            <Card className="bg-dark text-primary categories" key={categori.id}>
                <Card.Img src={categori.image} alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>{categori.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
          ))
          }
        </>
    )
}
