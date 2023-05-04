import { Container, Row, Col, Carousel, Card, Button, Form } from "react-bootstrap"
import { Offer1, Offers, Trending1, product, slider, trending } from "../Data/Data";
import { useNavigate } from "react-router-dom";
import Details from "./Details";


function Home() {
  const nav = useNavigate();
  function addtocart() {
    alert('Added to cart')
  }

  // function productshow(data){
  //   console.log(data);
  // }
  return (
    <>

      {/* <Container className="bg-primary"> */}
      <Container fluid>
        <Row>
          <Col>
            <h3>DELIVERY IN 24 HOURS</h3>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search Here</Form.Label>
                <Form.Control type="Search" placeholder="Search Here" />

              </Form.Group>


              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>



        <Row>
          <Col className="cur" onClick={() => nav('Details', { state: 'SHOP' })}>
            <h1 style={{ color: 'red' }}>SHOP BY CATEGORY</h1>
          </Col>
        </Row>





        {/* <Row>
          {
            product.map(function (d) {

              return (

                <Col >
                  <Card style={{ width: '16rem' }} className="cur" onClick={() => nav('/Details', { state: d })}>
                    <Card.Img variant="top" src={d.Img} />
                    <Card.Body>
                      <Card.Title>{d.name}</Card.Title>
                      <Card.Text>
                       {d.Text}             .
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href="#">Add to Cart</Card.Link>
                      <Card.Link href="#">Details</Card.Link>
                    </Card.Body>
                  </Card>

                </Col>
              )
            }

            )




          }
        </Row> */}



        <Row>
          {
            product.map(function (d) {

              return (

                <Col >
                  <Card className="crdstyle" onClick={() => nav('/Details', { state: d })}>
                    <Card.Img variant="top" src={d.Img} />
                    <Card.Body>
                      {/* <Card.Title>{d.name}</Card.Title> */}
                      <Card.Text>
                        {d.Text}             .
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href="#">Add to Cart</Card.Link>
                      {/* <Card.Link href="Addtocart">Add to Cart</Card.Link> */}
                      <Card.Link href="#">Details</Card.Link>
                    </Card.Body>
                  </Card>

                </Col>
              )
            }

            )




          }
        </Row>


        <Row>
          <Col>
            <Carousel className="slidersize">
              {
                slider.map(function (d) {
                  return (


                    <Carousel.Item>
                      <img
                        className="sliderimg"
                        src={d.Img}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{d.Text}</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>


                  )


                }
                )

              }
            </Carousel>

          </Col>
        </Row>

        {/* 
        <Row>
          {
            Offers.map(function (d) {
              return (
                <Col >
                  <Card className="cur" onClick={() => nav('/Details', { state: "Special" })}>
                    <h2>Special Offers</h2>
                  </Card>
                </Col>
              )
            }
            )
          }
        </Row> */}

        <Row>


          <Col className="offerstyle" onClick={() => nav('/Details', { state: "Special" })}>
            <h2>Special Offers</h2>
          </Col>
        </Row>


        <Row>
          {
            Offer1.map(function (d) {
              return (
                <Col lg={2} >
                  <Card style={{ width: '11rem' }} className="cur" onClick={() => nav('/Details', { state: d })}>
                    <Card.Img className="crdimage" variant="top" src={d.Img} />
                  </Card>
                </Col>
              )
            }
            )
          }

        </Row>


        {/* 
        <Row>
          {
            trending.map(function (d) {
              return (
                <Col >
                  <Card className="cur" onClick={() => nav('Details', { state: trending })}>
                    <h2>Trending Now</h2>
                  </Card>
                </Col>
              )
            }
            )
          }
        </Row> */}

        <Row>


          <Col className="trendingstyle" onClick={() => nav('/Details', { state: "trending" })}>
            <h2>Trending Now</h2>
          </Col>
        </Row>


        <Row>

          {
            Trending1.map(function (d) {
              return (
                <Col lg={2} >
                  <Card style={{ width: '11rem' }} className="cur" onClick={() => nav('/Details', { state: d })}>
                    <Card.Img variant="top" src={d.Img} />

                  </Card>
                </Col>
              )
            })
          }
          s

        </Row>








      </Container>


    </>

  );
}

export default Home;
