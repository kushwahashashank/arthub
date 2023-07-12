import React from "react";
import "./Work.css";
import projects from "../../Data/Data";

// import Slider from "./Slider";
import { Link } from "react-router-dom";

function Store() {
  document.title = "Work";

  return (
    <>
      <div id="work" className="store">
        {projects.map((e) => (
          <div key={e.distinct} className="image">
            <div className="photo">
              <div className="store_image">
                <Link
                  to={`/Slider/${e.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img src={e.photo} alt="" />
                  <div className="layout_cover">
                    <h1>{e.text}</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
