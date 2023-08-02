import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { SetBasket } from "../../Global/Actions/Index";
import projects from "../../Data/Data";
import { MyContext } from "../../MyContext";
import axios from "axios";
import Load from "../Loader/Load";
function Footer() {

  // user handling
  const { setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = async (e) => {
    setLoading(true);
    try {
      axios.get("/isauthenticated").then((res) => {
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
  // useEffect(() => {
  //   console.log("Abhishek");
  //   isAuthenticated();
  // }, []);
  // Cart maupalation

  const dispatch = useDispatch();
  const [cookies] = useCookies(["CART"]);
  var cartcookies = cookies["CART"];

  function getCookies() {
    var basketcurrent = [];
    if (cartcookies !== undefined && cartcookies.length > 0) {
      var i, j;
      for (i = 0; i < cartcookies.length; i++) {
        for (j = 0; j < projects.length; j++) {
          if (cartcookies[i].id === projects[j].id) {
            basketcurrent.push({
              photo: projects[j].photo,
              text: projects[j].text,
              price: projects[j].price,
              id: projects[j].id,
              cartprice: cartcookies[i].count * projects[j].price,
              count: cartcookies[i].count,
            });
          }
        }
      }
    }
    dispatch(SetBasket(basketcurrent));
  }
  getCookies();
  
  const fb = () => {
    window.open("https://www.facebook.com");
  };
  const insta = () => {
    window.open("https://www.instagram.com/_kushwaha_shashank_");
  };
  const mail = () => {
    window.open("mailto:kushwahaabhi101@gmail.com");
  };
  const tweet = () => {
    window.open("https://twitter.com");
  };
  return (
    <>
      {loading ? <Load /> : <></>}
      <footer id="footer">
        <BsTwitter
          id="twitter"
          data-tooltip-content="Connect with me on Twitter"
          className="fa"
          onClick={tweet}
        />
        <FaFacebookF
          id="facebook"
          data-tooltip-content="Connect with me on Facebook"
          className="fa"
          onClick={fb}
        />
        <FaInstagram
          id="instagram"
          data-tooltip-content="Follow me on Instagram"
          className="fa"
          onClick={insta}
        />
        <SiGmail
          id="mail"
          data-tooltip-content="Send me a mail"
          className="fa"
          onClick={mail}
        />
        <FaYoutube
          id="youtube"
          data-tooltip-content="Follow me on Youtube"
          className="fa"
        />
        <Tooltip
          anchorId="twitter"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="facebook"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="instagram"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="youtube"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="mail"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
      </footer>
    </>
  );
}

export default Footer;
