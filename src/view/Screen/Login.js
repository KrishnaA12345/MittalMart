import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const Nav = useNavigate();
  // const{name,setName}=useState('');

  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  // function Login(){
  //   alert("Login")
  // }

  // console.log{name};
  // console.log{email};
  // console.log{password};
  let submitlogin = async () => {

    let params = {
      email: email,
      password: password,
    }

    console.log(params);
    try {
      let res = await axios.post("login", params).catch(err => alert(err))
      console.log(res.data);

      let { success, message } = res.data
      if (success) {
        alert(message)
       

        Nav("/")
      }
      else {
        alert(message)
      }
    } catch (error) {
      alert(error)
    }
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <h1 className='formheading'>Login Here</h1>
      <Container>

        <Row>
          <Col>
            <Form className='login-form input'>


              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="Number" placeholder="Enter Mobile Number" value={name} onChangeCapture={(d)=>setName(d.target.value)}/>
         </Form.Group> */}


              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>email</Form.Label> */}
                <Form.Control type="email" placeholder="Enter Email" value={email} onChangeCapture={(d) => setEmail(d.target.value)} />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>password</Form.Label> */}
                <Form.Control type="password" placeholder="Enter Password" value={password} onChangeCapture={(d) => setPassword(d.target.value)} />
              </Form.Group>





              <Button variant="primary" onClick={submitlogin}>
                Login
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>

    </>


  )


}
export default Login;