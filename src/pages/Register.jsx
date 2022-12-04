import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () =>{
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=ConfirmPassword]");
    if(confirm.value === password.value){
        confirm.setCustomValidity('')
    }else{
        confirm.setCustomValidity('Password do not match')
    }
  }
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Please enter your first name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                enter your name !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Please enter your last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                enter your last name !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Your e-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Please enter your email"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Please enter your password"
                name="password"
                minLength={8}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Password <br />
                <Form.Text className="text-danger">Passowrd should have at least 6 characters</Form.Text>
              </Form.Control.Feedback>
             
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPasswordRepeat">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Please repeat your password"
                name="ConfirmPassword"
                minLength={8}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="pb-2">
              <Col>
                Do you have an account already ?
                <Link className="text-dark" to={"/login"}>
                  {" "}
                  Login{" "}
                </Link>
              </Col>
            </Row>
            <Button variant="outline-light" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Submit
            </Button>
            <Alert className="mt-2" show={true} variant="danger  ">
              user with that email already exists
            </Alert>
            <Alert className="mt-2" show={true} variant="info">
              user created successfully
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
