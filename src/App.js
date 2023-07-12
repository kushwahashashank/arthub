import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Store from "./Pages/Store/Store.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Pages/SliderImage/Slider.jsx";
import BuySlider from "./Pages/SliderImage/BuySlider.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Load from "./Components/Loader/Load.jsx";
import NewsLetter from "./Components/NewsLetter/NewsLetter.jsx";
import Work from "./Pages/Work/Work.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment/Payment.jsx";
import ErrorMessage from "./Components/ErrorMessages/ErrorMessage.jsx";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ARTHUB" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/load" element={<Load />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/error" element={<ErrorMessage />} />
          <Route path="/Slider/:target" element={<Slider />} />
          <Route path="/BuySlider/:target" element={<BuySlider />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
