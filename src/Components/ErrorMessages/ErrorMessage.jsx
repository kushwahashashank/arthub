import React from "react";
import { Alert } from "react-bootstrap";
function ErrorMessage({ varient = "info", children }) {
  return (
    <Alert varient={varient} style={{ fontsize: 20, color: "red" }}>
      <strong>{children}</strong>
    </Alert>
  );
}

export default ErrorMessage;
