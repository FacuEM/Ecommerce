import React from 'react'
import Button from 'react-bootstrap/Button'
import { Basket } from 'react-bootstrap-icons';


export default ({productSelected}) => (
  <div>
    {productSelected.id && 
      <div style={{marginTop:"90px"}}className="container">
        <div className="row " >
          <div className="col-md-4 card card-body">
            <img width = "100%" height="auto" src={productSelected.image} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{(productSelected.name).toUpperCase()}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Descripcion:</strong> {productSelected.descripcion}
              </li>
              <li className="list-group-item">
                <strong>Stock:</strong> {productSelected.stock}
              </li>
              <li className="list-group-item">
                <strong>precio</strong> {`$ ${productSelected.price},00`}
              </li>
            </ul>
            <br/>
            
            <div style = {{width:"10px", height:"auto", display:"inline-block"}}></div>
            <Button variant="dark">Agregar al carrito <Basket/></Button>
          </div>
        </div>
      </div>
      }

    </div>
);


  //https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg

  //https://www.rioshopdeco.com.ar/7215-thickbox_default/tabla-madera-redonda-34cm-art-p1222571.jpg