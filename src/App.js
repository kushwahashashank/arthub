import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Store from "./Pages/Store/Store.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Pages/SliderImage/Slider.jsx";
import BuySlider from "./Pages/SliderImage/BuySlider.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import NewsLetter from "./Components/NewsLetter/NewsLetter.jsx";
import Work from "./Pages/Work/Work.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment/Payment.jsx";
import ErrorMessage from "./Components/ErrorMessages/ErrorMessage.jsx";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import { MyContext } from "./MyContext.js";
function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <div className="app">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/ARTHUB" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/error" element={<ErrorMessage />} />
              <Route path="/slider/:target" element={<Slider />} />
              <Route path="/buyslider/:target" element={<BuySlider />} />
            </Routes>
            <NewsLetter />
            <Footer />
          </Router>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
