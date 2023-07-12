import React, { useState } from "react";
import "./NewsLetter.css";
function NewsLetter() {
  const [newsletter, setNewsletter] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  let Name, Value;
  const getNewsletter = (event) => {
    Name = event.target.name;
    Value = event.target.value;

    setNewsletter({ ...newsletter, [Name]: Value });
  };

  return (
    <div>
      <form className="newsletter">
        <h1 className="head">JOIN MY NEWSLETTER</h1>
        <p className="newshead">
          To keep up to date with original works, new print releases and behind
          the scenes…
        </p>
        <div className="newsform" method="POST">
          <input
            type="text"
            name="fname"
            id="firstname"
            value={newsletter.fname}
            onChange={getNewsletter}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lname"
            value={newsletter.lname}
            onChange={getNewsletter}
            id="lastname"
            placeholder="Last Name (optional)"
          />

          <input
            type="email"
            name="email"
            id="newsemail"
            value={newsletter.email}
            onChange={getNewsletter}
            placeholder="Email"
            required
          />
          <button id="newssignup" type="submit">
            SIGN
          </button>
        </div>
        <p className="pros">I won’t spam you, promise.</p>
      </form>
    </div>
  );
}

export default NewsLetter;
