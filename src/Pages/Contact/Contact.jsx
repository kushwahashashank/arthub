import React, { useState } from "react";
import "./Contact.css";
import map from "../../Asset/Images/map.png";
export default function Contact() {
  document.title = "Contact";
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="left_contact">
          <h2>CONTACT US</h2>
          <p className="contact_data">kushwahabhi101@gmail.com</p>
          <p className="contact_data">Lucknow, India</p>
        </div>

        <div className="Form">
          <form id="contactForm" method="POST">
            <p className="input_data">
              <label className="name">Name *</label>
              <div className="first">
                <p>
                  <input
                    className="input_name"
                    type="text"
                    name="fname"
                    id="fname"
                    value={user.fname}
                    onChange={getUserData}
                    required
                  />
                  <p>First Name</p>
                </p>
                <p>
                  <input
                    className="input_name"
                    type="text"
                    name="lname"
                    id="lname"
                    value={user.lname}
                    onChange={getUserData}
                    required
                  />
                  <p>Last Name</p>
                </p>
              </div>
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

            <button id="submit" className="contact_submit" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
      <img className="map" src={map} alt="" />
    </>
  );
}
