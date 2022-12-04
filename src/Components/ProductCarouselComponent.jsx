import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";



const ProductCarouselComponent = () => {
 


  return (
   
    <Carousel fade >
      <Carousel.Item>
        <LinkContainer
           style={{ height: "400px", objectFit: "cover" }}
          to="/product-details"
        >
          <img
            crossOrigin="anonymous"
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
        </LinkContainer>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <LinkContainer
          style={{ height: "400px", objectFit: "cover" }}
          to="/product-details"
        >
          <img
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
        </LinkContainer>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <LinkContainer
          style={{ height: "400px", objectFit: "cover" }}
          to="/product-details"
        >
          <img
            style={{ height: "400px", objectFit: "cover" }}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
            alt="Third slide"
          />
        </LinkContainer>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

  );
};

export default ProductCarouselComponent;
