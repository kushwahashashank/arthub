import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./User.css";
import logo from "../../Asset/Images/logo.png";
import { Link as L } from "react-scroll";
import { BsFillArrowUpCircleFill, BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getbasketSize } from "../../Global/Reducers/Cart";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";
import Load from "../Loader/Load";
export default function Navbar() {
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const Basket = useSelector((state) => state.controlBasket);
  const [active, setActive] = useState("home");
  const [shownav, setNav] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showUser, setShowUser] = useState(false);
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

  //Logout Function

  const LogOut = async (e) => {
    setLoading(true);
    try {
      axios.get("/Logout").then((res) => {
        console.log("res", res);
        console.log("status", res.status);
        setLoading(false);
        if (res.status === 200) {
          setUser({
            name: res.data.name,
            email: res.data.email,
          });
        }
      });
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  return (
    <>
      {loading ? <Load /> : <></>}
      <div className="navigation">
        <div className="logo">
          <Link
            onClick={() => {
              setActive("home");
              window.scrollTo(0, 0);
            }}
            to="/"
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
              to="/work"
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
              to="/store"
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
              to="/about"
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
              to="/contact"
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
              <div>
                <p
                  onClick={() => {
                    setShowUser(!showUser);
                  }}
                  className="user"
                >
                  {user?.name}
                </p>
                {showUser ? (
                  <div className="usercontrol">
                    <button
                      className="logout"
                      onClick={() => {
                        LogOut();
                        setShowUser(!showUser);
                      }}
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
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
            }}
            to="/cart"
            onClick={() => {
              setActive("home");
              window.scrollTo(0, 0);
            }}
          >
            {<BsCartFill id="basket" />}
            <span className="badge">{parseInt(value)}</span>
          </Link>
          <div className="navcontrol">
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
      </div>

      {showButton && (
        <p
          id="scroll"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsFillArrowUpCircleFill />
        </p>
      )}
    </>
  );
}
