import React from "react";

export default function InfoPlace(props) {
  var imgPath = null;
  try {
    imgPath = require(`../../../assets/images/flags/continents/${props.continent}/${props.mode}/${props.place}.png`);
  } catch (e) {
    imgPath = null;
  }
  return (
    <div className="info-place">
      <h2 id="info-place-name">{props.place}</h2>
      {imgPath ? (
        <img alt={`${props.place}-flag`} id="info-place-flag" src={imgPath} />
      ) : null}
    </div>
  );
}
