import React from "react";
import ReactTooltip from "react-tooltip";
import { pure } from "recompose";

import MapElements from "./MapElements";

const CreateMap = React.memo(
  ({
    started,
    handleClick,
    setPlaces,
    mapData,
    svgData,
    search,
    colour,
    mousePos,
  }) => (
    <div className="game-map-container">
      <svg className="game-map" viewBox={svgData.viewBox} label={svgData.label}>
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0.5" dy="1.4" stdDeviation=".5" />
          </filter>
        </defs>
        <MapElements
          started={true}
          svgData={svgData}
          mapData={mapData}
          handleClick={handleClick}
          search={search}
          colour={colour}
          mousePos={mousePos}
        />
      </svg>
      {/* <ReactTooltip id="search" place="bottom" type="error" effect="float">
            <span>{`${search}?`}</span>
        </ReactTooltip>
        <ReactTooltip id="complete" place="top" type="light" effect="solid">
            <span>{`complete`}</span>
        </ReactTooltip> */}
    </div>
  )
);

export default pure(CreateMap);
