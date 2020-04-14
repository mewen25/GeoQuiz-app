import React from "react";

export default function InfoPlace(props) {
  var imgPath = null;
  try {
    imgPath = require(`../../../assets/images/flags/continents/${props.continent}/${props.mode}/${props.place.name}.png`);
  } catch (e) {
    imgPath = null;
  }

  return (
    <div className="info-place">
      <h2 id="info-place-name">{props.place.name}</h2>
      {imgPath ? (
        <img
          alt={`${props.place.name}-flag`}
          id="info-place-flag"
          src={imgPath}
        />
      ) : null}
    </div>
  );
}
