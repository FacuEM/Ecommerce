import React from 'react'
import Button from 'react-bootstrap/Button'
import { Basket } from 'react-bootstrap-icons';

const prueba = {
  name: "tabla",
  descripcion: "Material: Madera, Metálico; Contiene: Tabla madera bambú; ideal para asado; Asa de agarre; Dimensiones: 34 cm diámetro; Presentación individual",
  image: "https://www.rioshopdeco.com.ar/7215-thickbox_default/tabla-madera-redonda-34cm-art-p1222571.jpg",
  stock: 4,
  price: "1.000",
  categoryId: 1
}
export default ({}) => (
  <div>
      <div className="container">
        <div className="row " style={{class:"sProduct"}}>
          <div className="col-md-4 card card-body">
            <img width = "100%" height="auto" src={prueba.image} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{(prueba.name).toUpperCase()}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Descripcion:</strong> {prueba.descripcion}
              </li>
              <li className="list-group-item">
                <strong>Stock:</strong> {prueba.stock}
              </li>
              <li className="list-group-item">
                <strong>precio</strong> {`$ ${prueba.price},00`}
              </li>
            </ul>
            <br/>
            <Button variant="dark"> Comprar </Button>
            <div style = {{width:"10px", height:"auto", display:"inline-block"}}></div>
            <Button variant="dark"><Basket/></Button>
          </div>
        </div>
      </div>
    </div>
);


  //https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg

  //https://www.rioshopdeco.com.ar/7215-thickbox_default/tabla-madera-redonda-34cm-art-p1222571.jpg