import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { popularProducts } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// admin components :
import "../src/srcc/App.css";
import Admin from "../src/srcc/pages/home/Home";
import UserList from "../src/srcc/pages/userList/UserList";
import User from "../src/srcc/pages/user/User";
import NewUser from "../src/srcc/pages/newUser/NewUser";
import AdminProduct from "../src/srcc/pages/product/Product";
import AdminProductList from "../src/srcc/pages/productList/ProductList";
import NewProduct from "../src/srcc/pages/newProduct/NewProduct";

const App = () => {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
          {/* Admin Pages */}
          <Routes>
          <Route exact path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/user/:userID" element={<User />} />
          <Route path="/admin/newUser" element={<NewUser />} />
          <Route path="/admin/products" element={<AdminProductList />} />
          <Route path="/admin/product/:productsID" element={<AdminProduct />} />
          <Route path="/admin/newProduct" element={<NewProduct />} />
          </Routes>

        
    </Router>
  );
};

export default App;
