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
    bgImg,
    list,
    marks,
    total,
    styles,
    scoreData = null,
    learn,
    locked = false,
    hasSmalls = false,
    ...props
  }) => {
    useEffect(() => {
      // const svgThing = svgPanZo om('#learn-map')
    }, []);

    // let toolTipData = {};
    // if (learn === false) {
    //   toolTipData["data-for"] = "search";
    //   toolTipData["data-tip"] = "true";
    // }
    ///

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // console.log("BG IMAGE", bgImg, props);
    return (
      <div
        className={styles.gameMapContainer}
        style={{ backgroundImage: `url(${bgImg})` }}
        data-has_smalls={hasSmalls}
      >
        <svg
          className={styles.gameMap}
          id="learn-map"
          data-for={"search"}
          data-locked={locked}
          data-tip={!learn ? "true" : null}
          // preserveAspectRatio="xMidYMid meet"
          viewBox={svgData.viewBox ?? "0 0 898 690"}
          label={svgData.label}
          style={
            mode === "choice"
              ? { pointerEvents: "none", overflow: "hidden" }
              : { overflow: "hidden" }
          }
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
            // mousePos={mousePos}
            mode={mode}
            styles={styles}
            find={find}
            scoreData={scoreData}
            locked={locked}
          />
          {/* </g> */}
          {/* {learn && (
            <ReactTooltip
              id="search"
              className={styles.toolTip}
              effect="solid"
              place="bottom"
            />
          )} */}
        </svg>
        {learn ? (
          <ReactTooltip
            id="search"
            className={[styles.toolTip, styles.learnToolTip]}
            effect="solid"
            place="top"
            globalEventOff={isMobile ? "click" : undefined}
          />
        ) : (
          <ReactTooltip
            id="search"
            className={styles.toolTip}
            place="bottom"
            globalEventOff={isMobile ? "click" : undefined}
          >
            <div className="quiz-tooltip">
              <span>{search}?</span>
            </div>
          </ReactTooltip>
        )}
        <ReactTooltip
          id="complete"
          place="top"
          type="light"
          effect="solid"
          globalEventOff={isMobile ? "click" : undefined}
        >
          <span>{`complete`}</span>
        </ReactTooltip>
      </div>
    );
  }
);

export default pure(CreateMap);
