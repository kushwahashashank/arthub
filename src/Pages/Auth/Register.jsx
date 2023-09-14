import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import "./Register.css";
import Load from "../../Components/Loader/Load";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
export default function Register() {
  document.title = "Register";
  const { setUser, notify } = useContext(MyContext);
  let navigate = useNavigate();
  const [errormessage, setErrormessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const getuserData = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return false;
    }
    return true;
  }
  function form_Validation() {
    const { name, email, password, cpassword } = userdata;
    if (name.length === 0) {
      setLoading(false);
      setErrormessage("Please enter your name");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else if (ValidateEmail(email)) {
      setLoading(false);
      setErrormessage("Please enter valid Email");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else if (password.length < 8) {
      setLoading(false);
      setErrormessage("Password should be at least 8 character long");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else if (password !== cpassword) {
      setLoading(false);
      setErrormessage("Confirm password didn't match");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else {
      return true;
    }
  }
  const registeruser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password } = userdata;
    let cart = [];
    if (form_Validation()) {
      axios
        .post("https://arthubbackend-production.up.railway.app/register", {
          name,
          email,
          password,
          cart,
        })
        .then((res) => {
          if (res.status === 201) {
            setUser({
              name: res.data.name,
              email: res.data.email,
            });
            setLoading(false);
            navigate("/");
            notify("success", "Registered successfully !");
          } else if (res.status === 202) {
            setLoading(false);
            setErrormessage("Email already exists !");
            delay(3000).then(function () {
              setErrormessage("");
            });
          }
        })
        .catch((error) => {
          setLoading(false);
          setErrormessage("Server Error");
          delay(3000).then(function () {
            setErrormessage("");
          });
        });
    }
  };

  return (
    <>
      {loading ? <Load /> : <></>}
      <div className="registerbackground">
        <div className="Form_register">
          <GrClose onClick={() => navigate(-2)} className="cross" />
          <form id="contactForm">
            <p className="form_head">REGISTER</p>
            {errormessage && <p className="error_message">{errormessage}</p>}
            <p className="input_form_data">
              <input
                className="input_values_log"
                type="text"
                name="name"
                required
                id="name"
                placeholder="Name"
                value={userdata.name}
                onChange={getuserData}
              />
            </p>
            <p className="input_form_data">
              <input
                className="input_values_log"
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email"
                value={userdata.email}
                onChange={getuserData}
              />
            </p>
            <p className="input_form_data">
              <input
                className="input_values_log"
                type="password"
                name="password"
                required
                id="password"
                placeholder="Password"
                value={userdata.password}
                onChange={getuserData}
              />
            </p>
            <p className="input_form_data">
              <input
                className="input_values_log"
                type="password"
                name="cpassword"
                required
                id="cpassword"
                placeholder="Confirm Password"
                value={userdata.cpassword}
                onChange={getuserData}
              />
            </p>
            <button
              id="submit"
              className="contact_submit"
              type="submit"
              onClick={registeruser}
            >
              SIGN UP
            </button>
          </form>
          <div className="redirect">
            <p
              style={{
                color: "rgb(86, 86, 86)",
              }}
            >
              Already registered ?{" "}
            </p>
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
