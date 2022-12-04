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

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

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
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Password
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Do not log out"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't you have an account ?
                <Link className="text-dark" to={"/register"}>
                  {" "}
                  Register{" "}
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
              Login
            </Button>
            <Alert className="mt-2" show={true} variant="danger  ">
              Wrong credentials
            </Alert>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
