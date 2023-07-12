import React from "react";
import "./Cart.css";
import data from "../../Data/Data.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddToCart,
  DeleteFromCart,
  SetBasket,
  RemoveFromCart,
} from "../../Global/Actions/Index";
import Subtotal from "./Subtotal";
import { useCookies } from "react-cookie";

function Cart() {
  document.title = "Cart";
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["CART"]);
  var cartcookies = cookies["CART"];
  function getCookies() {
    var basketcurrent = [];
    if (cartcookies !== undefined && cartcookies.length > 0) {
      var i, j;
      for (i = 0; i < cartcookies.length; i++) {
        for (j = 0; j < data.length; j++) {
          if (cartcookies[i].id === data[j].id) {
            basketcurrent.push({
              photo: data[j].photo,
              text: data[j].text,
              price: data[j].price,
              id: data[j].id,
              cartprice: cartcookies[i].count * data[j].price,
              count: cartcookies[i].count,
            });
          }
        }
      }
    }
    dispatch(SetBasket(basketcurrent));
  }
  // getCookies();
  var Basket = useSelector((state) => state.controlBasket);

  function RemoveCartItemHandler(id) {
    cartcookies = cartcookies.filter((e) => e.id !== id);
    setCookie("CART", cartcookies, {
      path: "/",
      expires: new Date(new Date().getTime() + 500000 * 1000),
    });
  }
  function RemoveCartHandler(id) {
    cartcookies.map((e) => {
      if (e.id === id && e.count > 1) {
        e.count--;
      }
      return 0;
    });
    setCookie("CART", cartcookies, {
      path: "/",
      expires: new Date(new Date().getTime() + 500000 * 1000),
    });
  }

  function AddCartHandler(id, count) {
    cartcookies.map((e) => {
      if (e.id === id) {
        e.count++;
      }
      return 0;
    });
    setCookie("CART", cartcookies, {
      path: "/",
      expires: new Date(new Date().getTime() + 500000 * 1000),
    });
  }
  if (Basket.length > 0) {
    return (
      <>
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
                        dispatch(DeleteFromCart(e.id));
                        RemoveCartHandler(e.id);
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
                        AddCartHandler(e.id, e.count);
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
                        RemoveCartItemHandler(e.id);
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
            to="/Store"
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
