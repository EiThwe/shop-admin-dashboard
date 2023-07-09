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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/404-page" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/material-icons" element={<MaterialIcons />} />
        <Route path="/font-awesome-icons" element={<FontAwesomeIcons/>} />
        <Route path="/flag-icons" element={<FlagIcons/>} />

        <Route path="/brands" element={<Brands/>} />

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
        <Route path="/vendor-list" element={<VendorList />} />
        <Route path="/vendors-profile" element={<VendorProfile />} />
      </Routes>
    </div>
  );
};

export default App;
