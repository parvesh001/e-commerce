import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop"
import ProductDetail from "./Pages/ProductDetail"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import "./App.css";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetail/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Layout>
    
  );
}

export default App;
