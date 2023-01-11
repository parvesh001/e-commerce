import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import UserProfile from "./Pages/UserProfile";
import "./App.css";
import Authentication from "./Pages/Authentication";
import AuthContext from "./Context/auth-context";
import SideEffects from "./Components/SideEffects/SideEffects";
import Orders from "./Pages/Orders";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <SideEffects />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        {authCtx.isLogedin && (
          <Route path="/user-profile" element={<UserProfile />} />
        )}
        {!authCtx.isLogedin && (
          <Route path="/user-authentication" element={<Authentication />} />
        )}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Layout>
  );
}

export default App;
