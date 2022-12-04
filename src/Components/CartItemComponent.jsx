import { ListGroup, Row, Col, Image, Form , Button} from "react-bootstrap";

function CartItemComponent() {
  return (
    <ListGroup.Item>
      <Row>
        <Col md={3}>
          <Image
          style={{width:200}}
          className="rounded"
          crossOrigin="anonymous"
            fluid
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></Image>
        </Col>
        <Col md={2}>
          product name: <br />
          Gaming mouse
        </Col>
        <Col md={2}><b className="text-primary">$89</b></Col>
        <Col md={3}>
            <Form.Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
        </Col>
        <Col md={2}>
            <Button type="button" variant="secondary" onClick={()=> window.confirm('Are you Sure ?')}>
                <i className="bi bi-trash">

                </i>
            </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CartItemComponent;
