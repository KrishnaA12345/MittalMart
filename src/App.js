import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Screen/home';
import About from './view/Screen/About';
import { footer, menubar } from './view/Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './view/Style/style.css'
import Register from './view/Screen/Resigter';
import Details from './view/Screen/Details';
import Login from './view/Screen/Login';
// import Details1 from './view/Screen/Details';
import Sections from './view/Screen/Sections';
// import addtocart from './view/Screen/addtocart';
function App() {
  // console.log(menubar);

  return (
    <>
      <BrowserRouter>

        <Container>
          <Row >
            {/* <Col  className="bg-danger"> */}
            <Col >
              <Navbar>
                {/* <Navbar bg="light" expand="lg"> */}
                <Container className="navmenubar" >
                  <Navbar.Brand href="#home">MITTAL MART</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto"> */}
                    <Nav >
                      <Nav.Link href="/">Home</Nav.Link>
                      {
                        menubar.map(function (d) {
                          return (
                            <Nav.Link href={`/${d}`}>{d}</Nav.Link>
                          )
                        }
                        )
                      }


                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>


          </Row>

        </Container>
        {/* <Link to="/"> Home</Link>
  <Link to="/About"> About</Link> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Payment" element={<Payment />} /> */}
          <Route path="/Sections" element={<Sections />} />



        </Routes>
      </BrowserRouter>
      <Row   >
        <Col >

          <Navbar bg="light" expand="lg" className=" navbarstyle">
            <Container className='navfooter'>
              <Navbar.Brand href="#home">MITTAL MART</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto"> */}
                <Nav >
                  <Nav.Link href="/">Home</Nav.Link>
                  {
                    footer.map(function (d) {
                      return (
                        <Nav.Link href={'/${d}'}>{d}</Nav.Link>
                      )
                    }
                    )
                  }


                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>

      </Row>

    </>
  );
}

export default App;
