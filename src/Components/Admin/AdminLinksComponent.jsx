import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminLinksComponent = () => {
  return (
    <Navbar bg="info" variant="dark" className="rounded mt-3">
      <Nav className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Order</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/chats">
          <Nav.Link>Messages</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>

        <Nav.Link>logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;
