import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default ({ categoriesP }) => {
  return (
    <>
      {categoriesP && categoriesP.map(categori => (
        <Link to={`/categories/${categori.id}`}>
          <Card className="bg-dark text-light categories" key={categori.id}>
            <Card.Img src={categori.image} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>
              </Card.Text>
            </Card.ImgOverlay>
            <Card.Title>{categori.name}</Card.Title>
          </Card>
          </Link>
      ))
      }
      {}
    </>
  )
}
