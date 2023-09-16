import React, { useState, useEffect } from "react";
import "./Cart.css";
// import data from "../../Data/Data.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Load from "../../Components/Loader/Load";
import {
  AddToCart,
  DeleteFromCart,
  RemoveFromCart,
} from "../../Global/Actions/Index";
import Subtotal from "./Subtotal";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";

function Cart() {
  document.title = "Cart";
  let Basket = useSelector((state) => state.controlBasket);
  const dispatch = useDispatch();
  const { user, notify } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      addtocart();
    }
  }, [Basket]);
  const addtocart = async (e) => {
    setLoading(true);
    const { email } = user;
    axios
      .put("https://arthubbackend-production.up.railway.app/updatecart", {
        email,
        cart: Basket,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 202) {
          notify("error", "Unable to do operation !");
        }
      })
      .catch((error) => {
        setLoading(false);
        notify("error", "Server error !");
      });
  };

  if (Basket.length > 0) {
    return (
      <>
        {loading ? <Load /> : <></>}
        <div className="cart_main">
          <p className="cart_heading">SHOPPING CART</p>
          {Basket.map((e) => (
            <div key={e.id} className="cart_product">
              <div className="cart_left">
                <div className="cart_image">
                  <Link to={`/Slider/${e.id}`}>
                    <img src={e.photo} alt="" />
                  </Link>
                </div>
                <p>{e.text}</p>
              </div>
              <div className="cart_alignment">
                <div className="cart_middle">
                  <div
                    className={
                      e.count === 1 ? "cart_custom_button" : "cart_btn"
                    }
                  >
                    <div
                      onClick={() => {
                        if(e.count>1)
                        {dispatch(DeleteFromCart(e.id));}
                      }}
                      className={
                        e.count === 1
                          ? "custom_button"
                          : "cart_button cart_manuplators"
                      }
                    >
                      &#x2212;
                    </div>
                  </div>
                  <p className="count">{e.count}</p>
                  <div className="cart_btn">
                    <div
                      onClick={() => {
                        dispatch(
                          AddToCart(
                            e.photo,
                            e.text,
                            e.price,
                            e.id,
                            e.cartprice,
                            e.count
                          )
                        );
                      }}
                      className="cart_button cart_manuplators"
                    >
                      &#x2B;
                    </div>
                  </div>
                </div>
                <div className="cart_right">
                  <p className="price">&#x20b9;{e.cartprice} </p>
                  <div className="cart_btn">
                    <div
                      className="cart_button"
                      onClick={() => {
                        dispatch(RemoveFromCart(e.id));
                        // addtocart();
                      }}
                    >
                      &#10005;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="total">
            <Subtotal />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="cart_main">
        <div className="cart_column">
          <p
            style={{
              fontSize: "1.2rem",
              paddingBottom: "2rem",
              color: "rgb(168, 166, 161);",
            }}
          >
            YOU HAVE NOTHING IN YOUR SHOPPING CART.
          </p>
          <Link
            to="/store"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              className="cart_checkout"
              style={{
                width: "15rem",
                color: "white",
              }}
            >
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Cart;
