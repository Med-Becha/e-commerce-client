import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  ListGroup,
} from "react-bootstrap";
import CartItemComponent from "../../../Components/CartItemComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OrderDetailsPageComponent = ({ getOrder }) => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] =
    useState("Mark as delivered");

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
        order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
          : setIsDelivered(false);
        setCartSubtotal(order.orderTotal.cartSubtotal);
        if (order.isDelivered) {
          setOrderButtonMessage("Order is finished");
          setButtonDisabled(true);
        }
      })
      .catch((err) =>
        console.log(
          err.response.data.message
            ? err.response.data.message
            : err.response.data
        )
      );
  }, [id, isDelivered]);

  return (
    <Container fluid>
      <Row>
        <h2>Order details</h2>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <h4>Shipping</h4>
              <b>Name : </b> {userInfo.name} {userInfo.lastName} <br />
              <b>Adresse : </b> {userInfo.address} {userInfo.city}{" "}
              {userInfo.state} {userInfo.zipCode} <br />
              <b>Phone : </b> {userInfo.phoneNumber} <br />
            </Col>
            <Col md={6}>
              <h4>Payment method</h4>
              <Form.Select value={paymentMethod} disabled={true}>
                <option value="pp">Bank Zitona</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className="mt-3 "
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Delivered at {isDelivered}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert
                  className="mt-3 "
                  variant={isPaid ? "success" : "danger"}
                >
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid yet</>}
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
              Item price (after tax) :{" "}
              <span className="fw-bold"> {cartSubtotal} TND</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Shipping: (after tax) : <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Tax : (after tax ): <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              Total price : (after tax) :{" "}
              <span className="fw-bold ">{cartSubtotal} TND</span>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              <div className="d-grid gap-2">
                <Button
                  disabled={buttonDisabled}
                  variant="danger"
                  type="button"
                >
                  {orderButtonMessage}
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPageComponent;
