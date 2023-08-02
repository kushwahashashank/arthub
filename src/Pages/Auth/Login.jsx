import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import Load from "../../Components/Loader/Load";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export default function Login() {
  document.title = "Login";
  const { user, setUser } = useContext(MyContext);
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = data;
    setData({
      email: "",
      password: "",
    });
    try {
      axios
        .post("/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          console.log(res.status);
          setLoading(false);
          if (res.status === 200) {
            // dispatch(SetUser(res.data.email, [], res.data.name));
            setUser({
              name: res.data.name,
              email: res.data.email,
            });
            navigate("/ARTHUB");
          }
        });
    } catch (error) {
      console.log(error);
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
          <form id="contactForm">
            <p className="form_head">SINGN IN</p>
            <p className="input_data">
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
            <p className="input_data">
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
              // onClick={registerUser}
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
