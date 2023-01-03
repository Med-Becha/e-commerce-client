import { Row, Col, Table, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../Components/Admin/AdminLinksComponent";
import { useState, useEffect } from "react";

const ProductsPageComponent = ({ fetchProducts, deleteProduct }) => {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false);

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message === "product removed") {
        setProductDeleted(!productDeleted);
      }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
        setProducts([
          {
            name: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          },
        ])
      );
    return () => abctrl.abort();
  }, [productDeleted]);

  return (
    <Container>
      <Row>
        <Col md={2}>
          <AdminLinksComponent />
        </Col>

        <Col md={10}>
          <h3 className="mt-1">
            Products list: {products.length}{" "}
            <LinkContainer to="/admin/create-new-product">
              <Button variant="outline-light" size="lg">
                create new
              </Button>
            </LinkContainer>
          </h3>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td className="text-center">
                    <LinkContainer to={`/admin/edit-product/${item._id}`}>
                      <Button className="btn-sm " variant="primary">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}

                    <Button
                      className="btn-sm "
                      variant="danger"
                      onClick={() => deleteHandler(item._id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPageComponent;
