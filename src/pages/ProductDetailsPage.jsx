import {
  Row,
  Col,
  Container,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AddedToCartMessageComponenet from "../Components/AddedToCartMessageComponenet";
import { Rating } from "react-simple-star-rating";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./swiperProductDetails.css";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponenet />
      <Row className="mt-5">
        <Col md={6} style={{zIndex:1}}>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="rounded"
              />
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush" className="rounded">
                <ListGroup.Item>
                  {" "}
                  <h2 className="m-auto">Product name</h2>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <b>Price</b>{" "}
                  <span className="fw-bold text-primary">150$</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  eos illum consequatur laboriosam? Rem, est. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quidem, atque!
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup className=" mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 ">
                <ListGroup.Item>
                  <b>Status:</b>{" "}
                  <span className="text-primary fw-bold">in stock</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Price</b>{" "}
                  <span className="fw-bold text-primary">150$</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Defalt select">
                    <option>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>Reviews</h5>
              <ListGroup variant="flush" className="rounded">
                {Array.from({ length: 5 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    <b> med becha </b>
                    <br />
                    <Rating readonly size={17} initialValue={4} /> <br />
                    20/09/2001 <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestias quaerat doloremque officia quae autem aliquam.
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          send review form
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.controleInput">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.controlTextarel"
              >
                <Form.Label>Example text</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option value="5">5 (very good)</option>
                <option value="4">4 (good)</option>
                <option value="3">3 (average)</option>
                <option value="2">2 (bad)</option>
                <option value="1">1 (awful)</option>
              </Form.Select>
              <Button variant="outline-light" className="my-2">
                submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
