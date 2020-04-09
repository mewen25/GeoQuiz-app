import React from "react";

export default function InfoPlace(props) {
  return (
    <div className="info-place">
      <h2 id="info-place-name">{props.place.name}</h2>
      {props.place.image ? (
        <img
          alt={`${props.place.name}-flag`}
          id="info-place-flag"
          src={props.place.image}
        />
      ) : null}
    </div>
  );
}
