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

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/grid-product" replace={true} />}
        />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/grid-product" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/main-category" element={<MainCategory />} />
        <Route path="/user-grid" element={<UsersGrid />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/users-profile" element={<UserProfile />} />
        <Route path="/vendor-grid" element={<VendorGrid />} />
      </Routes>
    </div>
  );
};

export default App;
