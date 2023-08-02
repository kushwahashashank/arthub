import React from "react";
import "./Load.css";
function Load({ size = 80 }) {
  return (
    <div className="main">
      <span className="circle circle-1"></span>
      <span className="circle circle-2"></span>
      <span className="circle circle-3"></span>
      <span className="circle circle-4"></span>
      {/* <span className="circle circle-5"></span> */}
      {/* <span className="circle circle-6"></span> */}
      {/* <span className="circle circle-7"></span>
      <span className="circle circle-8"></span> */}
    </div>
  );
}

export default Load;
