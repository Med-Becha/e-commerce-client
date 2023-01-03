import { Row, Container, ListGroup, Col, Button } from "react-bootstrap";

import AddedToCartMessageComponenet from "../Components/AddedToCartMessageComponenet";
import ProductForListComponent from "../Components/ProductForListComponent";
import PaginationComponent from "../Components/PaginationComponent";
import SortOptionsComponent from "../Components/SortOptionsComponent";
import PriceFilterComponent from "../Components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../Components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../Components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../Components/filterQueryResultOptions/AttributesFilterComponent";

import "./swiperProductDetails.css"

const ProductListPage = () => {
  return (
    <Container fluid>
      <AddedToCartMessageComponenet />
      <Row>
        <Col md={3}>
          <ListGroup variant="flush mt-4 rounded">
            <ListGroup.Item >
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              Filter: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="success m-1">Filter</Button>{" "}
              <Button variant="danger m-1">Reset filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={[
                // "https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                // "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
                // "https://images.unsplash.com/photo-1589739900593-8b1b925ee197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
                // "https://images.unsplash.com/photo-1640972040132-28b62b6b3718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80", 
                "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"]}
            />
          ))}

          <PaginationComponent  />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
