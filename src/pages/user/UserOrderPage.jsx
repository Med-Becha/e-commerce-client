import { Row, Col, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserOrderPage = () => {
  return (
    <Container> <Row>
    <Col md={12}>
      <h3>my orders</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Date</th>
            <th>Total</th>
            <th>Delivred</th>
            <th>Order details</th>
          </tr>
        </thead>
        <tbody>
          {["bi bi-check-lg text-warning", "bi bi-x-lg text-danger"].map(
            (item, idx) => (
              <tr key={idx}>
                <td>{idx +1}</td>
                <td>mohamed becha</td>
                <td>2022-09-12</td>
                <td>$124</td>
                <td>
                  <i className={item}></i>
                
                </td>
                <td>
                  <Link to="/user/order-details" className="">
                    Go to order
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Col>
  </Row></Container>
   
  );
};

export default UserOrderPage;
