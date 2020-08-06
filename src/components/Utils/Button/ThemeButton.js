import React from "react";
import "./btn.css";

export default ({ colour, col, btnPress, disabled = false }) => (
  <div
    style={{ backgroundColor: colour }}
    className={`theme-button${disabled ? ` btn-disabled` : ""}`}
    id={col}
    onClick={btnPress}
  />
);
