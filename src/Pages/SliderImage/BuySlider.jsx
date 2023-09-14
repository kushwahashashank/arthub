import React, { useState, useEffect } from "react";
import "./slider.css";
import projects from "../../Data/Data.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../../Global/Actions/Index";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";
export default function Slider() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { target } = useParams();
  const { user, notify } = useContext(MyContext);
  function gettarget() {
    if (target) {
      return JSON.parse(target);
    } else {
      return 0;
    }
  }
  let Basket = useSelector((state) => state.controlBasket);
  const slideIndex = gettarget();
  const [btntext, setBtntext] = useState("ADD TO CART");
  const myTimeout = setTimeout(change1, 3000);
  function change1() {
    setBtntext("ADD TO CART");
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    addtocart();
  }, [Basket]);

  const addtocart = async (e) => {
    console.log("cart updated");
    const { email } = user;
    axios
      .put("/updatecart", {
        email,
        cart: Basket,
      })
      .then((res) => {
        if (res.status === 201 && loading) {
          setBtntext("ADDED TO CART !");
          setLoading(false);
        }
        if (res.status === 202) {
          notify("error", "Unable to do operation !");
        }
        setTimeout(myTimeout);
      })
      .catch((error) => {
        notify("error", "Server error !");
        setTimeout(myTimeout);
      });
  };

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
                    if (user) {
                      setBtntext("ADDING...");
                      setLoading(true);
                      dispatch(
                        AddToCart(e.photo, e.text, e.price, e.id, e.price, 1)
                      );
                    } else {
                      navigate("/login");
                    }
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
