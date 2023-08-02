import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import projects from "../../Data/Data";
import Load from "../../Components/Loader/Load";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
function Home() {
  document.title = "Arthub";

  // function getCookies() {
  // setLoading(true);
  // if (!cartcookies) {
  // } else {
  //   setLoading(false);
  // }
  // }
  // getCookies();
  return (
    <>
      
      <div id="home" className="homepage">
        <div className="qoute">
          " The aim of art is not to represent the outward appearance of things,
          but their inward significance "
        </div>
        <div id="pictures" className="gallery">
          {projects.map((e) => (
            <div key={e.distinct} className="image_home">
              <img src={e.photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
