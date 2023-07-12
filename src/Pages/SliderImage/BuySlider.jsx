import React, { useState } from "react";
import "./slider.css";
import projects from "../../Data/Data.js";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Global/Actions/Index";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Slider() {
  const dispatch = useDispatch();
  const { target } = useParams();
  function gettarget() {
    if (target) {
      return JSON.parse(target);
    } else {
      return 0;
    }
  }
  const slideIndex = gettarget();
  const [cookies, setCookie] = useCookies(["CART"]);
  function CartHandler(id, count) {
    console.log(id, count);
    var cartcookies = [];
    if (cookies["CART"] === undefined) {
      cartcookies.push({ id: id, count: count });
      setCookie("CART", cartcookies, {
        path: "/",
        expires: new Date(new Date().getTime() + 500000 * 1000),
      });
      clearTimeout(myTimeout);
    } else {
      cartcookies = cookies["CART"];
      var checkincrement = true;
      cartcookies.map((e) => {
        if (e.id === id) {
          e.count++;
          checkincrement = false;
        }
        return 0;
      });
      if (checkincrement) {
        cartcookies.push({ id: id, count: count });
      }

      setCookie("CART", cartcookies, {
        path: "/",
        expires: new Date(new Date().getTime() + 500000 * 1000),
      });
      clearTimeout(myTimeout);
    }
  }
  const [btntext, setBtntext] = useState("ADD TO CART");
  const myTimeout = setTimeout(change1, 1000);
  function change1() {
    setBtntext("ADD TO CART");
  }

  return (
    <>
      <div className="container-slider buySlider">
        {projects.map((e, index) => {
          return (
            <div
              key={e.distinct}
              className={
                slideIndex === index + 1
                  ? "slide active-anim show_slider"
                  : "slide hide_slider"
              }
            >
              <div className="image_slider">
                <img src={e.photo} alt="" />
              </div>

              <div className="values">
                <p className="name_image">{e.text}</p>
                <p className="details buy_price">&#x20b9;{e.price}</p>

                <p className="details">{e.desc}</p>
                <p className="details">{e.desc1}</p>
                <button
                  onClick={() => {
                    setBtntext("ADDING...");
                    dispatch(
                      AddToCart(e.photo, e.text, e.price, e.id, e.price, 1)
                    );
                    CartHandler(e.id, 1);
                  }}
                >
                  {btntext}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
