import React from "react";
import "./Display.css";

export default ({ percent, colour = "#000" }) => {
  return (
    <div className="progress-base">
      <div
        className="progress-overlay"
        style={{ width: `${percent}%`, backgroundColor: colour }}
      />
    </div>
  );
};
