import React, { useState, useEffect } from "react";

import SelectedInfo from "./SelectedInfo";
import CreateMap from "../../../../pages/Game/CreateMap";

export default function TopActivity({ data }) {
  const [selected, setSelected] = useState({});
  const Map = data.map;
  // console.log(Map);
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className="learn-top learn-activity">
      <h1>TopActivity</h1>
      <div className="l-top-container">
        <div className="l-top-info">
          <SelectedInfo selectedData={selected} />
        </div>
        <div className="l-top-map">
          <div className="learn-map-quiz">
            <CreateMap
              mapData={data.current.data}
              svgData={data.map}
              handleClick={handleClick}
              // search={find.simple.name}
              colour={"#eee"}
              // mousePos={mousePos}
              // scoreData={find?.distance?.sorted}
            />
            {/* <Map
              data={data.current.data}
              type="quiz"
            //   handleClick={!finish ? handleClick : null}
            /> */}
          </div>
        </div>
        <div className="l-top-list"></div>
      </div>
    </div>
  );
}
