import { Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({images, idx}) => {
  return (
    <Card style={{ marginTop: "1.5rem", marginBottom: "" }}>
      <Row>
        <Col lg={5}>
          <LinkContainer to="/product-details">
            <Card.Img
            crossOrigin="anonymous"
              variant="top"
              src={images}
              className="rounded"
            />
          </LinkContainer>
        </Col>
        <Col lg={7}>
          <Card.Body>
            <LinkContainer to="/product-details">
              <Card.Title className="cursor-pointer text-dark">Card Title{"  "} <span className="text-primary">$124</span>  </Card.Title>
            </LinkContainer>
            <Card.Text className="text-dark">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="h4">
              <Button variant="outline-dark">add to cart</Button>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
