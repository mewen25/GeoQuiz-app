import React, { useState } from "react";
import Ripples from "react-ripples";

const colourScores = {
  perfect: "#47FF5A",
  veryHigh: "#B8E9A1",
  high: "#EEF8B6",
  med: "#F8D5B6",
  low: "#FF9A9A",
};

const MapElements = (props) => {
  function closest(needle, haystack) {
    return haystack.reduce((a, b) => {
      let aDiff = Math.abs(a - needle);
      let bDiff = Math.abs(b - needle);

      if (aDiff == bDiff) {
        return a > b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });
  }

  const groups = props.svgData.elements.map((obj, index) => {
    const colRng = Math.floor(Math.random() * props.colour.length);
    const countryColour = props.colour[colRng];
    let handler = [];
    const id = obj.id;
    if (props.mapData[id] && !props.mapData[id].class.includes("complete")) {
      handler = [`data-tip data-for=search onClick=${props.handleClick}`];
    }
    const smalls = props.mapData[id] && props.mapData[id].small ? true : false;
    const assist = props.mapData[id] && props.mapData[id].assist ? true : false;
    if (Object.keys(obj.render).length < 1) return;

    const elements = obj.render.map((e, index) => {
      let element = <></>;
      if (e.type === "path") element = <path key={index} {...e.attributes} />;
      else if (e.type === "rect")
        element = (
          <rect
            key={index}
            {...e.attributes}
            style={{ fill: "red", opacity: "0" }}
          />
        );
      else if (e.type === "circle")
        element = (
          <ellipse
            key={index}
            {...e.attributes}
            style={{
              fill: "white",
              fillOpacity: "0",
              stroke: "rgb(228,95,95)",
              strokeWidth: "2px",
            }}
          />
        );

      return element;
    });

    // if(props.mapData && props.mapData[id] && props.mapData[id].finished && !props.mapData[id].class.includes("complete")) props.mapData[id].class = [...props.mapData[id].class, "complete"];
    // console.log("attempts", props.mapData && props.mapData[id] && props.mapData[id].finished)
    const isComplete =
      props.mapData[id] && props.mapData[id].class.includes("complete");
    const col = (props.mapData[id] && props.mapData[id].colour) || "#e67";
    const dataCol =
      props.mapData[id] && col === props.mapData[id].colour[0] ? "1" : "2";
    const randomDelay = (Math.random() * 1).toFixed(1);
    // const fadeType = Math.random() < 0.5 ? "fadeInTopLeft" : "fadeInTopRight";animate__animated ${props.started && `animate__pulse`}
    // let tempCol = null;
    // // console.log(props.scoreData);
    // if (props?.scoreData?.obj && props.scoreData.obj[id]) {
    //   const distScore = props.scoreData.obj[id].dist;
    //   // const percentiles = [props.scoreData.low, props.scoreData.high];
    //   // const close = closest(distScore, percentiles);
    //   // console.log(distScore, props.scoreData);
    //   // if (distScore > props.scoreData.mid)
    //   //   tempCol = { ["data-dist-low"]: colourScores["low"] };
    //   // else if (distScore <= props.scoreData.mid)
    //   //   tempCol = { ["data-dist-high"]: colourScores["high"] };
    //   // else tempCol = { ["data-dist-perfect"]: colourScores["perfect"] };

    //   // else if (distScore > 0 && distScore <= 4)
    //   //   tempCol = { ["data-dist-veryHigh"]: colourScores["veryHigh"] };
    //   if (distScore > 0 && distScore < 8)
    //     tempCol = { ["data-dist-high"]: colourScores["high"] };
    //   else if (distScore > 8 && distScore < 12)
    //     tempCol = { ["data-dist-med"]: colourScores["med"] };
    //   else tempCol = { ["data-dist-low"]: colourScores["low"] };
    // }

    // const distanceScore = tempCol ? tempCol : {};

    const answer =
      props.mapData[id] && props.mapData[id].name === props.find
        ? {
            ["data-answer"]: true,
          }
        : {};
    const handles = {
      key: index,
      // style: {animationDelay: `${randomDelay}s`},
      id: id,
      onClick: props.mapData[id] && props.handleClick,
      className: `${
        (props.mapData[id] && props.mapData[id].class.join(" ")) || `other`
      }${
        props.mapData[id]
          ? ` qc-${props.mapData[id].id || props.mapData[id].name}`
          : ""
      }`,
      ["data-small"]: smalls,
      ["data-assist"]: assist,
      ["data-tip"]:
        (props.mapData[id] &&
          !props.mapData[id].class.includes(["complete", "other"])) ||
        false,
      ["data-for"]: "search",
      ["data-attempts"]:
        props.mapData[id] && props.mapData[id].finished
          ? props.mapData[id].finished
          : "",
      ["data-col"]: col,
      ["data-mode"]: props.mode,
      fill: col,
    };
    // console.log("mouse", props?.mousePos);
    return (
      <g {...handles} {...answer}>
        {/* {isComplete && <g className={`animationTest`}>
                    <circle cx={`${props?.mousePos?.x}%`} cy ={`${props?.mousePos?.x}%`} r = "7px"></circle>
                    <circle className="pulsey" cx={`${props?.mousePos?.y}%`} cy ={`${props?.mousePos?.y}%`} r = "10px"></circle>
                </g>} */}
        {elements}
      </g>
    );
  });
  return <>{groups}</>;
};

export default MapElements;
//className={props.mapData[id] ? props.mapData[id].class.join(" ") : "quiz-country"}
//fill={props.mapData[id] ? props.mapData[id].styles[0] : "#e67"}>
// const g = obj[Object.keys(obj)[0]];
//         let handler=[];
//         if(props.mapData[g.id] && !props.mapData[g.id].class.includes("complete")){
//             handler = [`data-tip data-for=search onClick=${props.handleClick}`];
//         }
//         console.log("got g", g, g.d);
//         const paths = g.d.map((p, index) => <path key={index} d={p} />)
