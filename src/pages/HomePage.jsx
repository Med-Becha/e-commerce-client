import ProductCarouselComponent from "../Components/ProductCarouselComponent";
import CategoriesCardComponent from "../Components/CategoriesCardComponent";
import Container from "react-bootstrap/Container";
const HomePage = () => {
  const categores = [
    {
      image:
        "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/product-list",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/product-list",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/product-list",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/product-list",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/product-list",
    },
  ];
  return (
    <>
      <ProductCarouselComponent />
      <div className="d-flex flex-wrap justify-content-center my-2">
        {categores &&
          categores.map((categorie, index) => (
            <CategoriesCardComponent
              key={index}
              image={categorie.image}
              linkToProduct={categorie.link}
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;
