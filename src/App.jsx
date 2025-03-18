import "./Index.css";
import HomePage from "./landing_page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/About/AboutPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import ProductPage from "./landing_page/Products/ProductPage";
import SupportPage from "./landing_page/Support/SupportPage";
import Login from "./landing_page/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={< Signup/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
