import React from "react";
import "./Store.css";
import projects from "../../Data/Data";

import { Link } from "react-router-dom";

function Store() {
  document.title = "Prints";
  return (
    <>
      <div id="store" className="store">
        {/* mapping the array using map */}
        {projects.map((e) => (
          <div key={e.distinct} className="image">
            <div className="photo">
              {/* <div className="store_image"> */}
              <Link
                to={`/BuySlider/${e.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img src={e.photo} alt="" />
              </Link>
            </div>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
