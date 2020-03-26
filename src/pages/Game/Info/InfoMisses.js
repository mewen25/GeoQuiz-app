import React from "react";

export default function InfoMisses(props) {
  const imgPath = require(`../../../assets/images/cross.png`);
  return (
    <div className="info-misses">
      <img id="misses-icon" alt="cross" src={imgPath} />
      <h2 id="misses-count">{props.misses}</h2>
    </div>
  );
}
