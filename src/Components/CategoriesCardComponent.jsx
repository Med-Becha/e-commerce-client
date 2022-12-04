import Card from "react-bootstrap/Card";
import {LinkContainer} from "react-router-bootstrap";

const CategoriesCardComponent = ({image, linkToProduct}) => {
  return (
    <Card style={{ width: "24%" }} className=" m-1">
        <LinkContainer to={linkToProduct}>
        <Card.Img crossOrigin="anonymous" style={{ height: "300px", objectFit:"cover"}} src={image}  alt="pc gamer" />
        </LinkContainer>
      
    </Card>
  );
};

export default CategoriesCardComponent;
