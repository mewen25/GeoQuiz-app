import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { pure } from "recompose";
import svgPanZoom from "svg-pan-zoom";
import { ReactComponent as Tick } from "../../assets/images/game/Tick.svg";
import { ReactComponent as Question } from "../../assets/images/game/QuestionMark.svg";

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
    list,
    marks,
    total,
    styles,
    scoreData = null,
    ...props
  }) => {
    useEffect(() => {
      // const svgThing = svgPanZoom('#learn-map')
    }, []);

    return (
      <div className={styles.gameMapContainer}>
        <svg
          className={styles.gameMap}
          id="learn-map"
          // preserveAspectRatio="xMidYMid meet"
          viewBox={svgData.viewBox ?? "0 0 898 690"}
          label={svgData.label}
          style={
            mode === "choice"
              ? { pointerEvents: "none", overflow: "hidden" }
              : { overflow: "hidden" }
          }
          data-tip="true"
          data-for="search"
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
            styles={styles}
            find={find}
            scoreData={scoreData}
          />
          {/* </g> */}
        </svg>
        <ReactTooltip
          id="search"
          // delayShow="0"
          className={styles.toolTip}
          // backgroundColor="rgba(51, 141, 49, 0.94)"
          // borderColor="#368334"
          place="bottom"
          // type="error"
          effect="float"
        >
          <div className="quiz-tooltip">
            <span>{search}?</span>
            {/* <Question /> */}
          </div>
          {/* {marks && total && <span className="quiz-tooltip-bottom">{marks}/{total}</span>} */}
        </ReactTooltip>
        <ReactTooltip id="complete" place="top" type="light" effect="solid">
          <span>{`complete`}</span>
        </ReactTooltip>
      </div>
    );
  }
);

export default pure(CreateMap);
