import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className=" fixed-top">
      <Navbar className="backgroundNavbar" variant="dark">
        <Container className="">
          <LinkContainer className="me-auto text-white" to="/">
            <Navbar.Brand>React Shop</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/cart" className="text-white">
            <Navbar.Brand>
              <Badge pill bg="danger ">
                2
              </Badge>
              <i className="bi bi-cart-dash "></i>
              cart
            </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      {/* second navbar */}
      <Navbar collapseOnSelect expand="md" className="backgroundNavbar" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mt-1 ">
              <DropdownButton
                className="w-100"
                id="dropdown-item-button"
                variant="outline-info"
                title="categores"
              >
                <Dropdown.Item className="text-primary" as="button">laptop</Dropdown.Item>
                <Dropdown.Item className="text-primary" as="button">desktop</Dropdown.Item>
                <Dropdown.Item className="text-primary"  as="button">screen</Dropdown.Item>
              </DropdownButton>
            </Nav>
            {/* 3 */}
            <Nav className="m-auto mt-1">
              <Form className="d-flex">
                <Form.Control
                style={{width:"100%"}}
                  type="search"
                  placeholder="Search"
                  className="me-1 "
                  aria-label="Search"
                />
                <Button variant="outline-info">
                  <i className="bi bi-search"></i>
                </Button>
              </Form>
            </Nav>
            {/* 1 */}
            <Nav className=" mt-1 ">
              <LinkContainer to="/login" className="lg:mx-1">
                <Button variant="outline-info">Login</Button>
              </LinkContainer>
              <LinkContainer to="/register" className="lg:mx-1">
                <Button variant="outline-info">register</Button>
              </LinkContainer>
              <LinkContainer to="/admin/orders" className="lg:mx-1">
                <Button variant="outline-info">
                  Admin
                  <span className="p-1 translate-middle position-absolute top-1 start-10 bg-danger border border-light rounded-circle"></span>
                </Button>
              </LinkContainer>
              <Nav>
                <DropdownButton
                  className="w-100"
                  id="dropdown-item-button"
                  variant="outline-info"
                  title="user name"
                >
                  <Dropdown.Item as={Link} to="/user/my-orders">
                    my orders
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/user">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="button">Logout</Dropdown.Item>
                </DropdownButton>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
