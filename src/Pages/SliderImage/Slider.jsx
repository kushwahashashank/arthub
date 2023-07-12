import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./BtnSlider.jsx";
import projects from "../../Data/Data.js";
import { useParams } from "react-router-dom";

export default function Slider() {
  const { target } = useParams();
  function gettarget() {
    if (target) {
      console.log("abhi");
      return JSON.parse(target);
    } else {
      console.log("abhi");
      return 0;
    }
  }

  const [nextItem, setnextItem] = useState(
    projects[gettarget() % projects.length].text
  );
  const [prevItem, setprevItem] = useState(
    projects[(gettarget() + projects.length - 2) % projects.length].text
  );

  const [slideIndex, setSlideIndex] = useState(gettarget());
  const nextSlide = () => {
    if (slideIndex === projects.length) {
      setprevItem(
        projects[(slideIndex - 1 + projects.length) % projects.length].text
      );
      setSlideIndex(1);
      setnextItem(projects[1 % projects.length].text);
    } else {
      setprevItem(
        projects[(slideIndex - 1 + projects.length) % projects.length].text
      );
      setSlideIndex(slideIndex + 1);
      setnextItem(projects[(slideIndex + 1) % projects.length].text);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 1) {
      setprevItem(projects[(projects.length - 2) % projects.length].text);
      setSlideIndex(projects.length);
      setnextItem(projects[0 % projects.length].text);
    } else {
      setnextItem(
        projects[(slideIndex - 1 + projects.length) % projects.length].text
      );
      setprevItem(
        projects[(slideIndex - 3 + projects.length) % projects.length].text
      );
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <>
      <div className="btn_sliders">
        <BtnSlider moveSlide={prevSlide} direction={"prev"} value={prevItem} />
        <BtnSlider moveSlide={nextSlide} direction={"next"} value={nextItem} />
      </div>
      <div className="container-slider">
        {projects.map((e, index) => {
          return (
            <div
              key={e.distinct}
              className={
                slideIndex === index + 1
                  ? "slide active-anim show_slider"
                  : "slide hide_slider"
              }
            >
              <div className="image_slider">
                <img src={e.photo} alt="" />
              </div>

              <div className="values">
                <p className="name_image">{e.text}</p>
                <p className="details">{e.year}</p>
                <p className="details">
                  {e.height} &times; {e.width} cm
                </p>
                <p className="details">{e.desc}</p>
                <p className="details">{e.desc1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
