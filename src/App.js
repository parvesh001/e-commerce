import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import UserDetails from "./Pages/UserDetails";
import "./App.css";
import { useEffect } from "react";
import { sendingCartData } from "./Store/cart-actions";
import { fetchingCartData } from "./Store/cart-actions";

let initialRound = true;

function App() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchingCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialRound) {
      initialRound = false;
      return;
    }
    if (cartData.change) {
      dispatch(sendingCartData(cartData));
    }
  }, [dispatch, cartData]);
  console.log(cartData)

  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Layout>
  );
}

export default App;
