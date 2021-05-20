import React from "react";
import "./Display.css";

export default ({ percent, colour = "#000", streak = 0 }) => {
  // console.log(`Streak ${streak}`);
  return (
    <>
      {streak > 0 && <p>{streak} in a row</p>}
      <div
        className="progress-base"
        style={streak > 0 ? { marginBottom: "15px" } : null}
      >
        <div
          className="progress-overlay"
          style={{ width: `${percent}%`, backgroundColor: colour }}
        />
      </div>
    </>
  );
};
