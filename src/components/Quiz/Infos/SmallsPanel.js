import React, { useState } from "react";
import { ReactComponent as Small } from "../../../assets/images/game/small-btn.svg";
import LineTo from "react-lineto";

export default function SmallsPanel({ smalls, handleClick }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="small-place-panel">
      {/* <h2>{hovered}</h2> */}
      {smalls.map((s) => (
        <div className={`small-place-btn sb-${s.id || s.name}${s.class.includes("complete") ? " disabled-btn" : ""}`} onClick={() => handleClick(s.id || s.name)} onMouseOver={() => setHovered(s.id || s.name)} onMouseLeave={() => setHovered(null)}>
          <Small />
        </div>
      ))}
      {hovered && (
        <LineTo
          className="quiz-line"
          from={`sb-${hovered}`}
          to={`qc-${hovered}`}
          borderStyle="dashed"
          borderColor="#000"
          borderWidth={3}
        />
      )}
    </div>
  );
}
