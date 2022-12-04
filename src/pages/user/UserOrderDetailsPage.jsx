import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  ListGroup,
} from "react-bootstrap";
import CartItemComponent from "../../Components/CartItemComponent";

const UserOrderDetailsPage = () => {
  return (
    <Container fluid>
      <Row>
        <h2>Order details</h2>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <h4>Shipping</h4>
              <b>Name : </b>Mohamed becha frikha <br />
              <b>Adresse : </b>Rte de tunis km8 cité el ons <br />
              <b>Phone : </b>99363131 <br />
            </Col>
            <Col md={6}>
              <h4>Payment method</h4>
              <Form.Select disabled={false}>
                <option value="Zitona">Bank Zitona</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3 " variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3 " variant="success">
                  Paid on 2022-10-02
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h3>Order items</h3>
          <ListGroup variant="flush" className="rounded">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent className="mb-1" key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <h4>Order Summary</h4>
          <ListGroup>
            <ListGroup.Item>
              <h4>Order Summary</h4>
            </ListGroup.Item>

            <ListGroup.Item>
              Item price (after tax) : <span className="fw-bold"> $855</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Shipping: (after tax) : <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Tax : (after tax ): <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              Total price : (after tax) :{" "}
              <span className="fw-bold ">1000$</span>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              <div className="d-grid gap-2">
                <Button variant="danger" type="button">
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPage;
