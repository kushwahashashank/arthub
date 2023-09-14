import React, { useState } from "react";
import "./NewsLetter.css";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
function NewsLetter() {
  const { notify } = useContext(MyContext);
  const [newsletter, setNewsletter] = useState({
    name: "",
    email: "",
  });

  const getNewsletter = (event) => {
    setNewsletter({ ...newsletter, [event.target.name]: event.target.value });
  };

  function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return false;
    }
    return true;
  }
  function form_Validation() {
    const { name, email } = newsletter;
    if (name.length === 0) {
      notify("warning", "Please enter your name !");
      return false;
    } else if (ValidateEmail(email)) {
      notify("warning", "Please enter valid email !");
      return false;
    } else {
      return true;
    }
  }
  const newsSignin = async (e) => {
    e.preventDefault();
    const { name, email } = newsletter;
    if (form_Validation()) {
      axios
        .post("/newssignin", {
          name,
          email,
        })
        .then((res) => {
          setNewsletter({
            name: "",
            email: "",
          });
          if (res.status === 201) {
            notify("success", "Signed newsletter successfully");
          }
          if (res.status === 202) {
            notify("error", "Unable to Signin");
          }
        })
        .catch((error) => {
          setNewsletter({
            name: "",
            email: "",
          });
          notify("error", "Server error");
        });
    }
  };

  return (
    <div>
      <form className="newsletter">
        <h1 className="head">JOIN MY NEWSLETTER</h1>
        <p className="newshead">
          To keep up to date with original works, new print releases and behind
          the scenes…
        </p>
        <div className="newsform">
          <input
            type="text"
            name="name"
            value={newsletter.name}
            onChange={getNewsletter}
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            value={newsletter.email}
            onChange={getNewsletter}
            placeholder="Email"
            required
          />
          <button id="newssignup" type="submit" onClick={newsSignin}>
            SIGN
          </button>
        </div>
        <p className="pros">I won’t spam you, promise.</p>
      </form>
    </div>
  );
}

export default NewsLetter;
