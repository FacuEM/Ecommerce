import React, { Fragment } from "react";
import { Carousel, Row, Container, Card, CardGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAdminProducts } from "../../redux/actionCreators/adminCreator";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAdminProducts();
  }

  render() {
    return (
      <Fragment>
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

            <Carousel.Caption className="text-dark">
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

            <Carousel.Caption>
              <h3>Gran variedad de productos</h3>
              <p>
                Consigue todo lo que necesitas para tu hogar en un solo lugar
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <h1 style={{ marginTop: "4rem" }}>
          PRODUCTOS DESTACADOS DEL MES <i class="fas fa-percentage"></i>
        </h1>
        <CardGroup>
          <Row>
            {this.props.products &&
              this.props.products.map((prod) => {
                if (prod.id % 3 == 0) {
                  return (
                    <Card
                      className="cardw"
                      style={{ margin: "10px" }}
                      key={prod.id}
                    >
                      <Link to={`/products/${prod.id}`} key={prod.id}>
                        <Card.Img
                          className="card-img"
                          variant="top"
                          src={prod.image}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Precio: <strike>{`$ ${prod.price}`}</strike>{" "}
                          {`$ ${prod.price - 300}`}
                        </small>
                      </Card.Footer>
                    </Card>
                  );
                }
              })}
          </Row>
        </CardGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps, { fetchAdminProducts })(Home);
