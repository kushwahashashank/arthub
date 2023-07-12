import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./slider.css";
export default function BtnSlider({ moveSlide, direction, value }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
       <div className="slider_content">
          <p className="move_btn">{value}</p>
          <MdArrowForwardIos className="fontsize" />
        </div>
      ) : (
        <div className="slider_content">
          <MdArrowBackIosNew className="fontsize" />
          <p className="move_btn">{value}</p>
        </div>
      )}
    </button>
  );
}
