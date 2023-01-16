import React, { useContext, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "./App.css";
import Authentication from "./Pages/Authentication";
import AuthContext from "./Context/auth-context";
import SideEffects from "./Components/SideEffects/SideEffects";
import Model from "./UI/Model/Model";

const Home = React.lazy(() => import("./Pages/Home"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const About = React.lazy(() => import("./Pages/About"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Orders = React.lazy(() => import("./Pages/Orders"));
const UserProfile = React.lazy(() => import("./Pages/UserProfile"));
const ProductDetail = React.lazy(() => import("./Pages/ProductDetail"));

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <SideEffects />
      <Suspense
        fallback={
          <Model>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </Model>
        }
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
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
      </Suspense>
    </Layout>
  );
}

export default App;
