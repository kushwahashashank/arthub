import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import Load from "../../Components/Loader/Load";
import { GrClose } from "react-icons/gr";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import { useDispatch } from "react-redux";
import { SetBasket } from "../../Global/Actions/Index";
export default function Login() {
  document.title = "Login";
  const dispatch = useDispatch();
  const { setUser, notify } = useContext(MyContext);
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
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
    const { email, password } = data;
    if (ValidateEmail(email)) {
      setLoading(false);
      setErrormessage("Please enter valid Email");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else if (password.length === 0) {
      setLoading(false);
      setErrormessage("Please enter your password");
      delay(3000).then(function () {
        setErrormessage("");
      });
      return false;
    } else {
      return true;
    }
  }
  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = data;
    if (form_Validation()) {
      axios
        .post("https://arthubbackend-production.up.railway.app/login", {
          email,
          password,
        })
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setUser({
              name: res.data.name,
              email: res.data.email,
              cart: res.data.cart,
            });
            dispatch(SetBasket(res.data.cart));
            navigate("/");
            notify("success", "User logged in !");
          }
          if (res.status === 203) {
            setUser({
              name: res.data.name,
              email: res.data.email,
            });
            setErrormessage("Invalid credentials");
            delay(3000).then(function () {
              setErrormessage("");
            });
          }
          if (res.status === 202) {
            setUser({
              name: res.data.name,
              email: res.data.email,
            });
            setErrormessage("User does not exists");
            delay(3000).then(function () {
              setErrormessage("");
            });
          }
        })
        .catch((error) => {
          setLoading(false);
          setData({
            email: "",
            password: "",
          });
          setErrormessage("Server error");
          delay(3000).then(function () {
            setErrormessage("");
          });
        });
    }
  };

  const getUserData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      {loading ? <Load /> : <></>}
      <div className="registerbackground">
        <div className="Form_register">
          <GrClose onClick={() => navigate(-1)} className="cross" />
          <form id="contactForm">
            <p className="form_head">SINGN IN</p>
            {errormessage && <p className="error_message">{errormessage}</p>}
            <p className="input_form_data">
              <input
                className="input_values_log"
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email"
                value={data.email}
                onChange={getUserData}
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
                value={data.password}
                onChange={getUserData}
              />
            </p>
            <button
              id="submit"
              className="contact_submit"
              type="submit"
              onClick={registerUser}
            >
              SIGN IN
            </button>
          </form>
          <div className="redirect">
            <p style={{ color: "rgb(86, 86, 86)" }}>Do not have account ? </p>
            <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
