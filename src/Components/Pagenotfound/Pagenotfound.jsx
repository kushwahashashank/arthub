import React from "react";
import { Link } from "react-router-dom";
function Pagenotfound() {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        zIndex: "500",
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        top: "0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem", marginBottom: "2rem" }}>Page Not Found !</p>
      <Link
        to="/"
        style={{
          color: "white",
          padding: "0.8rem",
          backgroundColor: "black",
          border: "unset",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
}

export default Pagenotfound;
