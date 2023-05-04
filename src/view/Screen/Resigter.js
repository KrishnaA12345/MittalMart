import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Resigter() {
  const nav = useNavigate()
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // function userRegister(){
  //   alert("Register")
  // }

  // console.log{name};
  // console.log{email};
  // console.log{password};


  let submitregister = async () => {
    console.log(file);
    console.log(fileName);

    const formdata = new FormData();
    formdata.append("file", file)
    formdata.append("filename", fileName)
    let data = JSON.stringify(Object.fromEntries(formdata));

    console.log(data);
    let params = {
      Name: Name,
      email: email,
      password: password,
      // image:file
    }
    console.log(params);
    try {
      let res = await axios.post("register", params).catch(err => alert(err))
      console.log(res.data);
      let { success, message } = res.data
      if (success) {
        alert(message)
        // setLogReg("login")
        nav("/Login");
      }
      else {
        alert(message)
      }
    } catch (error) {
      console.log("error==", error);
      alert(error)
    }
    setName("")
    setEmail("")
    setPassword("")

  }


  return (
    <>
      <h1 className='formheading'>Register</h1>
      <Container>

        <Row>

          <Col >
            <Form className='register-form input'>


              <Form.Group className="Registerform" controlId="formBasicEmail">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="Name" placeholder="Enter Name" value={Name} onChangeCapture={(d) => setName(d.target.value)} />
              </Form.Group>


              <Form.Group className="Registerform" controlId="formBasicEmail">
                {/* <Form.Label>email</Form.Label> */}
                <Form.Control type="Email" placeholder="Enter Email" value={email} onChangeCapture={(d) => setEmail(d.target.value)} />
              </Form.Group>


              <Form.Group className="Registerform" controlId="formBasicEmail">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Enter Password" value={password} onChangeCapture={(d) => setPassword(d.target.value)} />
              </Form.Group>

              {/* <Form.Group className="Registerform" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="Gender" placeholder="Enter your Gender"   value={Name} onChangeCapture={(d)=>setName(d.target.value)}/>
         </Form.Group> */}


              {/* <Form.Group className="Registerform" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="Number" placeholder="Enter Your Mobile Number" value={Name} onChangeCapture={(d)=>setName(d.target.value)}/>
         </Form.Group> */}



              <Button variant="primary" onClick={submitregister} className='regbutton'>
                Register
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>

    </>


  )


}
export default Resigter;