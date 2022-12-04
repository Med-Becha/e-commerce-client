import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPages from "./pages/ProductListPage";
import Register from "./pages/Register";
import PageNotExist from "./pages/PageNotExist";
import ProtectedRoutesComponents from "./Components/ProtectedRoutesComponents";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrderPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import AdminAnalyticsPage from "./pages/Admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/Admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/Admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/Admin/AdminAnalyticsPage";
import AdminOrderPage from "./pages/Admin/AdminOrderPage";
import AdminEditUserPage from "./pages/Admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminProductsPage from "./pages/Admin/AdminProductsPage";
import AdminUsersPage from "./pages/Admin/AdminProductsPage";

import ScrollTop from "./utils/Scrolltop";



function App() {
  return (
    <Router>
      <ScrollTop/>
      <HeaderComponent />
      <Routes>
          {/* public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPages />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/prouduct-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotExist />} />

          {/* user routes  */}
          <Route element={<ProtectedRoutesComponents admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
          </Route>
        

        {/* admin routes  */}
        <Route element={<ProtectedRoutesComponents admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/Create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-porduct" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
