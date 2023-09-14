import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getbaskettotal, getbasketSize } from "../../Global/Reducers/Cart";
import { Link } from "react-router-dom";

export default function Subtotal() {
  const Basket = useSelector((state) => state.controlBasket);
  var value = getbaskettotal(Basket);
  var basketsize = getbasketSize(Basket);
  return (
    <div className="subtotal">
      <div className="cart_subtotal_column">
        <p>Subtotal ({parseInt(basketsize)})</p>
        <p>&#x20b9;{parseInt(value)}</p>
      </div>
      <Link
        to="/payment"
        className="cart_checkout"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        CHECKOUT
      </Link>
    </div>
  );
}
function Gettotal() {
  const Basket = useSelector((state) => state.controlBasket);
  var value = getbaskettotal(Basket);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: "1rem",
        paddingTop: "1.5rem",
        // marginBottom: "1rem",
      }}
    >
      <p>Total : </p>
      <p>&#x20b9;{parseInt(value)}</p>
      <Link
        to="/cart"
        style={{
          textDecoration: "none",
          color: "white",
          padding: "0.8rem",
          fontSize: "0.8rem",
          backgroundColor: "black",
          width: "max-content",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        GO TO CART
      </Link>
    </div>
  );
}
export { Gettotal };
