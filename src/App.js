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
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment/Payment.jsx";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import { MyContext } from "./MyContext.js";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
function App() {
  const [user, setUser] = useState(null);
  const notify = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        break;
      case "success":
        NotificationManager.success(message);
        break;
      case "warning":
        NotificationManager.warning(message);
        break;
      case "error":
        NotificationManager.error(message);
        break;
      default:
    }
  };
  return (
    <>
      <MyContext.Provider value={{ user, setUser, notify }}>
        <div className="app">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/slider/:target" element={<Slider />} />
              <Route path="/buyslider/:target" element={<BuySlider />} />
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
            <NewsLetter />
            <Footer />
            <NotificationContainer />
          </Router>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
