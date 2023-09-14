import React, { useState } from "react";
import "./Contact.css";
import map from "../../Asset/Images/map.png";
import axios from "axios";
import Load from "../../Components/Loader/Load";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
export default function Contact() {
  document.title = "Contact";
  const { notify } = useContext(MyContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const getUserData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return false;
    }
    return true;
  }
  function form_Validation() {
    const { name, email, message } = user;
    if (name.length === 0) {
      setLoading(false);
      notify("warning", "Please enter your name !");
      return false;
    } else if (ValidateEmail(email)) {
      setLoading(false);
      notify("warning", "Please enter valid email !");
      return false;
    } else if (message.length === 0) {
      setLoading(false);
      notify("warning", "Can't send empty message !");
      return false;
    } else {
      return true;
    }
  }
  const sendMessage = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { name, email, message } = user;
    if (form_Validation()) {
      axios
        .post("/sendmessage", {
          name,
          email,
          message,
          status: false,
        })
        .then((res) => {
          setLoading(false);
          if (res.status === 201) {
            notify("success", "Message sent successfully");
            setUser({
              name: "",
              email: "",
              message: "",
            });
          }
          if (res.status === 202) {
            notify("error", "Unable to send message");
          }
        })
        .catch((error) => {
          setLoading(false);
          setUser({
            name: "",
            email: "",
            message: "",
          });
          notify("error", "Server error");
        });
    }
  };

  return (
    <>
      {loading ? <Load /> : <></>}
      <div id="contact" className="contact">
        <div className="left_contact">
          <h2>CONTACT US</h2>
          <p className="contact_data">kushwahabhi101@gmail.com</p>
          <p className="contact_data">Lucknow, India</p>
        </div>

        <div className="Form">
          <form id="contactForm">
            <p className="input_data">
              <label className="name">Full Name *</label>
              <p>
                <input
                  className="input_values"
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={getUserData}
                  required
                />
              </p>
            </p>

            <p className="input_data">
              <label>Email *</label>
              <input
                className="input_values"
                type="email"
                name="email"
                required
                id="email"
                value={user.email}
                onChange={getUserData}
              />
            </p>

            <p className="input_data">
              <label>Message *</label>
              <textarea
                className="input_values"
                name="message"
                required
                rows="5"
                id="message"
                value={user.message}
                onChange={getUserData}
              ></textarea>
            </p>

            <button
              id="submit"
              className="contact_submit"
              onClick={sendMessage}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <img className="map" src={map} alt="" />
    </>
  );
}
