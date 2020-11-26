import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { pure } from "recompose";
import svgPanZoom from "svg-pan-zoom";

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
    mode = "normal",
    find,
    scoreData = null,
    ...props
  }) => {

    useEffect(() => {
      // const svgThing = svgPanZoom('#learn-map')
    }, [])


    return <div className="game-map-container">
      <svg
        className="game-map"
        id="learn-map"
        // preserveAspectRatio="xMidYMid meet"
        viewBox={svgData.viewBox ?? "0 0 898 690"}
        label={svgData.label}
        style={mode === "choice" ? { pointerEvents: "none", overflow: "hidden" } : {overflow: "hidden"}}
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        xmlnsEv="http://www.w3.org/2001/xml-events"
        // transform={svgData?.transform}
      >
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0.5" dy="1.4" stdDeviation=".5" />
          </filter>
        </defs>
        {/* <g className="map-viewPort"> */}
        <MapElements
          started={true}
          svgData={svgData}
          mapData={mapData}
          handleClick={handleClick}
          search={search}
          colour={colour}
          mousePos={mousePos}
          mode={mode}
          find={find}
          scoreData={scoreData}
        />
        {/* </g> */}
      </svg>
      {/* <ReactTooltip id="search" place="bottom" type="error" effect="float">
            <span>{`${search}?`}</span>
        </ReactTooltip>
        <ReactTooltip id="complete" place="top" type="light" effect="solid">
            <span>{`complete`}</span>
        </ReactTooltip> */}
    </div>

});

export default pure(CreateMap);
