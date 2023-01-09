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
import UserProfile from "./Pages/UserProfile";
import "./App.css";
import { useEffect } from "react";
import { sendingCartData } from "./Store/cart-actions";
import { fetchingCartData } from "./Store/cart-actions";
import Authentication from "./Pages/Authentication";
import { AuthContextProvider } from "./Context/auth-context";
import { gettingUser, settingUser } from "./Store/user-actions";

let initialRound = true;
let isInitialRoundForUser = true;

function App() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  console.log(user)

  useEffect(() => {
    dispatch(fetchingCartData());
    dispatch(gettingUser())
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

  useEffect(() => {
    if (isInitialRoundForUser) {
      isInitialRoundForUser = false;
      return;
    }
    if (user.change) {
      dispatch(settingUser(user));
    }
  }, [dispatch, user]);

  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-authentication" element={<Authentication />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
