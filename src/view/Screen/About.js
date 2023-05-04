
import {Button,Form,Row,Col,Container} from 'react-bootstrap';
import { useState } from 'react';



function About() 
{
  const{name,setName}=useState('');



return(
    <>
       <h1>About Us</h1>

<p> This is a grocery website.Here every type of grocery product and daily
    need poroducts are avilable at Reasonable prices with Great dicounts</p>
    <Container>

        <Row>

            <Col>
            <Form>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Feedback</Form.Label>
        <Form.Control type="name" placeholder="Please Give Your Feedback About Us" value={name} onChangeCapture={(d)=>setName(d.target.value)}/>
         </Form.Group>
         
        
      <Button variant="primary" >
        Submit
      </Button>
    </Form>
    </Col>
          
        </Row>
    </Container>
    
    </>


)


}
export default About;




















