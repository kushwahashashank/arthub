import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { SetBasket } from "../../Global/Actions/Index";
import { MyContext } from "../../MyContext";
import axios from "axios";
import Load from "../Loader/Load";
import { useCookies } from "react-cookie";
function Footer() {
  // user handling
  const [cookies] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { setUser, notify } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = async (e) => {
    let temp = JSON.stringify(cookies.token);
    console.log(temp);
    if (temp) {
      setLoading(true);
      axios
        .post(
          "https://arthubbackend-production.up.railway.app/isauthenticated",
          {
            token: temp,
          }
        )
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setUser({
              name: res.data.name,
              email: res.data.email,
              cart: res.data.cart,
            });
            dispatch(SetBasket(res.data.cart));
          }
        })
        .catch(() => {
          setLoading(false);
          notify("error", "Server error !");
        });
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  // Cart maupalation

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
