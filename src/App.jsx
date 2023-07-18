import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";
import SubCategory from "./pages/SubCategory";
import MainCategory from "./pages/MainCategory";
import UsersGrid from "./pages/UsersGrid";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import VendorGrid from "./pages/VendorGrid";
import VendorList from "./pages/VendorList";
import VendorProfile from "./pages/VendorProfile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import MaterialIcons from "./pages/MaterialIcons";
import FontAwesomeIcons from "./pages/FontAwesomeIcons";
import FlagIcons from "./pages/FlagIcons";
import Brands from "./pages/Brands";
import Review from "./pages/Review";
import NewOrder from "./pages/NewOrder";
import ListProduct from "./pages/ListProduct";
import OrderHistory from "./pages/OrderHistory";
import OrderDetail from "./pages/OrderDetail";
import Invoice from "./pages/Invoice";

const App = () => {
  return (
    <div>
      <Routes>
        {/* DashBoard */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* Not Found */}
        <Route path="/404-page" element={<NotFound />} />

        {/* Default */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />

        {/* Authentication */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Icon */}
        <Route path="/material-icons" element={<MaterialIcons />} />
        <Route path="/font-awesome-icons" element={<FontAwesomeIcons />} />
        <Route path="/flag-icons" element={<FlagIcons />} />

        {/* Brand */}
        <Route path="/brands" element={<Brands />} />

        {/* Review */}
        <Route path="/reviews" element={<Review />} />

        {/* Product */}
        <Route path="/grid-product" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

        {/* Category */}
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/main-category" element={<MainCategory />} />

        {/* User */}
        <Route path="/user-grid" element={<UsersGrid />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/users-profile" element={<UserProfile />} />

        {/* Vendor */}
        <Route path="/vendor-grid" element={<VendorGrid />} />
        <Route path="/vendor-list" element={<VendorList />} />
        <Route path="/vendors-profile" element={<VendorProfile />} />

        {/* Order */}
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
};

export default App;
