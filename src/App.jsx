import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";

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
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;
