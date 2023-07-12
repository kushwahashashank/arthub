import React, { useEffect, useState } from "react";
import { Gettotal } from "../Cart/Subtotal";
import { useSelector } from "react-redux";
import upi from "../../Asset/Payment/UPI.png";
import rupay from "../../Asset/Payment/rupay.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Payment.css";
function Payment() {
  // cart items
  var Basket = useSelector((state) => state.controlBasket);

  // animation on load
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // states for delivery toggle
  const [isActivedelivery, setIsActivedelivery] = useState(false);
  const [filled, setFilled] = useState(false);

  // states for email toggle
  const [isActive_email, setisActive_email] = useState(false);
  const [isemailedit, setIsemailedit] = useState(false);

  // states for delivery toggle
  const [isdeliveryedit, setIsdeliveryedit] = useState(false);
  const [isdelivery_values, setIsdelivery_values] = useState(false);

  // states for payment toggle
  const [isActivepayment, setIsActivepayment] = useState(false);

  // variable states
  const [address, setAddress] = useState({
    email: "",
    name: "",
    phone: "",
    address1: "",
    address2: "",
    zipcode: "",
    country: "",
    state: "",
    city: "",
  });

  // Form values getter
  let name, value;
  const getuserdetails = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAddress({ ...address, [name]: value });
  };

  // email setter functions
  const emailcontinue = () => {
    if (address.email.length > 0) {
      //sets email text visible
      setisActive_email(true);
      // makes email editable true
      setIsemailedit(true);
      //sets payment true else sets delivery input true
      filled ? setIsActivepayment(true) : setIsActivedelivery(true);
    } else {
      alert("Enter email Id");
    }
  };

  const editemail = () => {
    if (filled) {
      // sets delivey values active
      setIsdelivery_values(true);
      // make delivery editable
      setIsdeliveryedit(true);
    }
    // sets the delivey input false
    setIsActivedelivery(false);
    //sets payment false
    setIsActivepayment(false);
    // sets email text false
    setisActive_email(false);
    // makes email editable false
    setIsemailedit(false);
  };

  // delivery setter functions
  const editdelivery = () => {
    if (address.email) {
      // sets delivery input true
      setIsActivedelivery(true);
      // sets payment false
      setIsActivepayment(false);
      // sets delivery edit false
      setIsdeliveryedit(false);
      // set email text true
      setisActive_email(true);
      // sets email editable true
      setIsemailedit(true);
      // sets delivery text true
      setIsdelivery_values(false);
    } else {
      alert("Enter Email");
    }
  };

  const deliverycontinue = () => {
    if (
      address.address1 &&
      address.city &&
      address.country &&
      address.name &&
      address.state &&
      address.phone &&
      address.zipcode
    ) {
      setFilled(true);
      // sets delivery editable
      setIsdeliveryedit(true);
      // sets delivery input false
      setIsActivedelivery(false);
      // sets payment true
      setIsActivepayment(true);
      // sets delivery text true
      setIsdelivery_values(true);
    } else {
      alert("Enter the address details");
    }
  };

  return (
    <>
      <div className="static"></div>
      <div className="checkout">
        <div
          className="checkout_section"
          data-aos="fade-right"
          duration="600"
          data-aos-offset="50"
        >
          <div className="email">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <p className="checkout_option_head">1. Your Email</p>
              <p
                onClick={editemail}
                style={
                  isemailedit
                    ? { fontSize: "15px", color: "#787878" }
                    : { display: "none" }
                }
              >
                Edit
              </p>
            </div>
            <p
              style={
                isActive_email
                  ? {
                      display: "flex",
                      paddingLeft: "2rem",
                      color: "grey",
                      fontSize: "1.1rem",
                    }
                  : { display: "none" }
              }
            >
              {address.email}
            </p>
            <div
              style={
                isActive_email ? { display: "none" } : { display: "unset" }
              }
            >
              <input
                className="checkout_section_input"
                type="email"
                placeholder="Email *"
                onChange={getuserdetails}
                name="email"
                id="email"
                value={address.email}
                required
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "14px",
                  paddingBottom: "5px",
                }}
              >
                You'll receive receipts and notifications at this email address.
              </p>
              <div
                style={{
                  display: "flex",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                <input
                  style={{
                    accentColor: "black",
                    height: "1.2rem",
                    width: "1.2rem",
                    border: "1px solid #e1e1e1",
                  }}
                  type="checkbox"
                />
                <p style={{ paddingLeft: "0.5rem", color: "rgb(46, 46, 46)" }}>
                  Sign up to receive news and updates.
                </p>
              </div>
              <button className="btn_continue" onClick={emailcontinue}>
                Continue
              </button>
            </div>
          </div>
          <div className="delivery">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <p className="checkout_option_head">2. Delivery Methods</p>
              <p
                onClick={editdelivery}
                style={
                  isdeliveryedit
                    ? { fontSize: "15px", color: "#787878" }
                    : { display: "none" }
                }
              >
                Edit
              </p>
            </div>
            <div
              className={
                isdelivery_values ? "address_details" : "address_details_hide"
              }
            >
              <p className="address_text">{address.name}</p>
              <p className="address_text">{address.address1}</p>
              {address.address2.length > 0 ? (
                <p className="address_text">{address.address2}</p>
              ) : (
                <p></p>
              )}

              <p className="address_text">{address.country}</p>
              <div>
                <p className="address_text">{address.zipcode}</p>
                <p className="address_text">{address.state}</p>
                <p className="address_text">{address.city}</p>
              </div>
              <p className="address_text">{address.phone}</p>
            </div>
            <div
              className={
                isActivedelivery ? "delivery_method" : "delivery_method_hide"
              }
            >
              <div className="delivery_method_main">
                <p
                  style={{
                    fontSize: "14px",
                    padding: "0.5rem 0rem 1rem 0rem",
                  }}
                >
                  DELIVERY OPTION
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #e1e1e1",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="regular_prints"
                      type="radio"
                      value="Regular"
                      name="options"
                      style={{
                        accentColor: "black",
                        marginRight: "1rem",
                        height: "1rem",
                        width: "1rem",
                      }}
                    />{" "}
                    Regular prints
                  </div>
                  <p style={{ right: "0" }}>&#x20b9;500</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #e1e1e1",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="large_prints"
                      type="radio"
                      value="Large"
                      name="options"
                      style={{
                        accentColor: "black",
                        marginRight: "1rem",
                        height: "1rem",
                        width: "1rem",
                      }}
                    />{" "}
                    Large prints
                  </div>
                  <p style={{ right: "0" }}>&#x20b9;1000</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingTop: "1rem",

                    paddingBottom: "1rem",

                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="custom_prints"
                      type="radio"
                      value="Custom"
                      name="options"
                      style={{
                        accentColor: "black",
                        marginRight: "1rem",
                        height: "1rem",
                        width: "1rem",
                      }}
                    />{" "}
                    Custom prints
                  </div>
                  <p style={{ right: "0" }}>&#x20b9;1500</p>
                </div>
              </div>
              <div className="delivery_method_main">
                <p
                  style={{
                    fontSize: "14px",
                    padding: "0.5rem 0rem 1rem 0rem",
                  }}
                >
                  SHIPPING ADDRESS
                </p>
                <input
                  className="checkout_section_input"
                  type="text"
                  placeholder="Full Name *"
                  onChange={getuserdetails}
                  name="name"
                  id="name"
                  value={address.name}
                />
                <input
                  className="checkout_section_input"
                  type="text"
                  placeholder="Address 1 *"
                  onChange={getuserdetails}
                  name="address1"
                  id="address1"
                  value={address.address1}
                />
                <input
                  className="checkout_section_input"
                  type="text"
                  placeholder="Address 2"
                  onChange={getuserdetails}
                  name="address2"
                  id="address2"
                  value={address.address2}
                />
                <input
                  className="checkout_section_input"
                  type="text"
                  placeholder="Country *"
                  onChange={getuserdetails}
                  name="country"
                  id="country"
                  value={address.country}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    className="checkout_section_input1"
                    type="text"
                    placeholder="Zip Code *"
                    onChange={getuserdetails}
                    name="zipcode"
                    id="zipcode"
                    value={address.zipcode}
                  />
                  <input
                    className="checkout_section_input1"
                    type="text"
                    placeholder="State *"
                    onChange={getuserdetails}
                    name="state"
                    id="state"
                    value={address.state}
                  />
                  <input
                    className="checkout_section_input1"
                    type="text"
                    placeholder="City *"
                    onChange={getuserdetails}
                    name="city"
                    id="city"
                    value={address.city}
                  />
                </div>
                <input
                  className="checkout_section_input"
                  type="number"
                  placeholder="Phone Number *"
                  onChange={getuserdetails}
                  name="phone"
                  id="phone"
                  value={address.phone}
                />
                <button onClick={deliverycontinue} className="btn_continue">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className="payment">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <p className="checkout_option_head">3. Payment</p>
            </div>
            <div
              className={isActivepayment ? "payment_main" : "payment_main_hide"}
            >
              <p style={{ color: "grey" }}>How would you like to pay?</p>
              <div className="payment_options">
                <img className="payment_logos" src={rupay} alt="" />
                <img className="payment_logos" src={upi} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="checkout_cart"
          data-aos="fade-left"
          duration="600"
          data-aos-offset="50"
        >
          <div className="cart_load">
            {Basket.map((e) => (
              <div key={e.id} className="cart_checkout_main">
                <div className="cart_checkout_left">
                  <div className="cart_checkout_image">
                    <img src={e.photo} alt="" />
                  </div>
                  <p style={{ color: "black", fontSize: "16px" }}>
                    {e.text} ({e.count})
                  </p>
                </div>
                <div className="cart_checkout_right">
                  <p className="cart_checkout_price">&#x20b9;{e.cartprice} </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Gettotal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
