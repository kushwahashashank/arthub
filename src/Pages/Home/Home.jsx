import React from "react";
import "./Home.css";
import projects from "../../Data/Data";

function Home() {
  document.title = "Arthub";
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
