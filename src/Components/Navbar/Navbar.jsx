import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Asset/Images/logo.png";
import { Link as L } from "react-scroll";
import { BsFillArrowUpCircleFill, BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getbasketSize } from "../../Global/Reducers/Cart";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export default function Navbar() {
  const { user,setUser } = useContext(MyContext);
  const Basket = useSelector((state) => state.controlBasket);
  const [active, setActive] = useState("home");
  const [shownav, setNav] = useState(false);
  const [showButton, setShowButton] = useState(false);
  var value = parseInt(getbasketSize(Basket));
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <Link
            onClick={() => {
              setActive("home");
              window.scrollTo(0, 0);
            }}
            to="/ARTHUB"
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul
          className={shownav ? "active" : "dis"}
          onClick={() => setNav(!shownav)}
        >
          <li>
            <Link
              className={active === "work" ? "active__nav" : "navigation_li_a"}
              onClick={() => {
                setActive("work");
                window.scrollTo(0, 0);
              }}
              to="/Work"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              className={active === "store" ? "active__nav" : "navigation_li_a"}
              onClick={() => {
                setActive("store");
                window.scrollTo(0, 0);
              }}
              to="/Store"
            >
              PRINTS
            </Link>
          </li>
          <li>
            <Link
              className={active === "about" ? "active__nav" : "navigation_li_a"}
              onClick={() => {
                setActive("about");
                window.scrollTo(0, 0);
              }}
              to="/About"
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link
              className={
                active === "contact" ? "active__nav" : "navigation_li_a"
              }
              onClick={() => {
                setActive("contact");
                window.scrollTo(0, 0);
              }}
              to="/Contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        {/* Cart */}
        <div className="cart">
          {user?.name?.length > 0 ? (
            <p
              style={{
                color: "rgb(153, 153, 153)",
                paddingRight: "5px",
                textDecoration: "none",
                fontSize: "1rem",
                margin: "1rem 1rem 1rem 1rem",
              }}
            >
              {user?.name}
            </p>
          ) : (
            <Link
              style={{
                color: "rgb(153, 153, 153)",
                paddingRight: "5px",
                textDecoration: "none",
                fontSize: "1rem",
                margin: "1rem 1rem 1rem 1rem",
              }}
              to="/login"
            >
              Sign In
            </Link>
          )}

          <Link
            style={{
              cursor: "pointer",
              color: "black",
              fontStyle: "none",
              paddingTop: "10px",
            }}
            to="/Cart"
            onClick={() => {
              setActive("home");
              window.scrollTo(0, 0);
            }}
          >
            {<BsCartFill id="basket" />}
            <span className="badge">{parseInt(value)}</span>
          </Link>
          <div
            id="nav-icon"
            className={shownav ? "open" : ""}
            onClick={() => setNav(!shownav)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {showButton && (
        <L
          to="nav"
          style={{ display: "none" }}
          smooth={true}
          duration={1000}
          id="scroll"
        >
          <BsFillArrowUpCircleFill />
        </L>
      )}
    </>
  );
}
