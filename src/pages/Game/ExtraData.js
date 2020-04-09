import React, { useEffect } from "react";

export default function ExtraData(props) {
  useEffect(() => {
    let extraData = null;
    console.log(props.place);
    if (props.place.extraData) {
      let newData = Object.assign({}, props.place.extraData);
      console.log(newData);
      // for (let [key, value] of Object.entries(mapData[0])) {
      //   newData[0][key].class = "country";
      // }
      // extraData = props.place.extraData.map(data => (
      //   <p className="extra-data">{data}</p>
      // ));
    }
  }, []);

  return (
    <div className="game-extra-data">
      {/* <div className="extra-data-container">
        {props.place.image ? (
          <img
            alt={`${props.place.simple.name}-flag`}
            src={props.place.simple.image}
          />
        ) : null}
        <div className="extra-data-info">
          <h2>{props.place ? props.place.simple.name : null}</h2>
          {extraData ? <div>{extraData}</div> : null}
        </div>
      </div> */}
    </div>
  );
}
