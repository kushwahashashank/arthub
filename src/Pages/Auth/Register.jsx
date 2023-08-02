import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Setuserdata, Logoutuserdata } from "../../Global/Actions/Index";
import axios from "axios";
import "./Register.css";
import Load from "../../Components/Loader/Load";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export default function Register() {
  document.title = "Register";
  const { setUser } = useContext(MyContext);
  let navigate = useNavigate();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const registeruser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password, cpassword } = userdata;
    if (password !== cpassword) {
      // logic
    } else {
      try {
        axios
          .post("/register", {
            name,
            email,
            password,
          })
          .then((res) => {
            if (res.status === 201) {
              setUser({
                name: res.data.name,
                email: res.data.email,
              });
              setLoading(false);
              navigate("/");
            }
            console.log(res);
            console.log(res.status);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // let name, value;
  const getuserData = (event) => {
    // name = event.target.name;
    // value = event.target.value;
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  return (
    <>
      {loading ? <Load /> : <></>}
      <div className="registerbackground">
        <div className="Form_register">
          <form id="contactForm">
            <p className="form_head">REGISTER</p>
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
              // onClick={registeruser}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
