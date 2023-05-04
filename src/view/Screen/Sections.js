import { useNavigate } from "react-router-dom";
import { Category } from "../Data/Data";
import { Row, Col, Card } from "react-bootstrap"

// import { useNavigate } from "react-router-dom";
function Sections() {
  const nav = useNavigate();

  return (


    <Row>
      {
        Category.map(function (d) {

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
    </Row>


  )
}

export default Sections;