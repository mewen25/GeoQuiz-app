import React, { useState } from 'react';
import Ripples from "react-ripples";

const MapElements = (props) => {
    const groups = props.svgData.elements.map((obj, index) => {
        const colRng = Math.floor(Math.random() * props.colour.length);
        const countryColour = props.colour[colRng];
        let handler = [];
        const id = obj.id;
        if(props.mapData[id] && !props.mapData[id].class.includes("complete")) {
            handler = [`data-tip data-for=search onClick=${props.handleClick}`];
        }
        const smalls = props.mapData[id] && props.mapData[id].small ? true : false;
        const elements = obj.render.map((e, index) => {
            let element = <></>;
            if(e.type === "path") element = <path key={index} {...e.attributes} />;
            else if(e.type === "rect") element = <rect key={index} {...e.attributes} style={{fill: "none"}} />
            else if(e.type === "circle") element = <ellipse key={index} {...e.attributes} style={{fill:"white",fillOpacity:"0",stroke:"rgb(228,95,95)", strokeWidth:"2px"}} />

            return element;
        })
        
        // if(props.mapData && props.mapData[id] && props.mapData[id].finished && !props.mapData[id].class.includes("complete")) props.mapData[id].class = [...props.mapData[id].class, "complete"];
        // console.log("attempts", props.mapData && props.mapData[id] && props.mapData[id].finished)
        const isComplete = props.mapData[id] && props.mapData[id].class.includes("complete");
        const col = props.mapData[id] && props.mapData[id].colour||"#e67";
        const dataCol = props.mapData[id] && col === props.mapData[id].colour[0] ? "1" : "2";
        const randomDelay = (Math.random() * 1).toFixed(1);
        // const fadeType = Math.random() < 0.5 ? "fadeInTopLeft" : "fadeInTopRight";animate__animated ${props.started && `animate__pulse`} 
        const handles = {
            key: index,
            // style: {animationDelay: `${randomDelay}s`},
            id: id,
            onClick: props.mapData[id] && props.handleClick,
            className: `${props.mapData[id] && props.mapData[id].class.join(" ") || `other`}${props.mapData[id] ? ` qc-${props.mapData[id].id||props.mapData[id].name}` : ""}`,
            ["data-small"]: smalls,
            ["data-tip"]: props.mapData[id] && !props.mapData[id].class.includes(["complete", "other"]) || false,
            ["data-for"]: "search",
            ["data-attempts"]: props.mapData[id] && props.mapData[id].finished ? props.mapData[id].finished : "",
            ["data-col"]: col,
            fill: col,
        }
        // console.log("mouse", props?.mousePos);
        return(
            <g {...handles} >
                {/* {isComplete && <g className={`animationTest`}>
                    <circle cx={`${props?.mousePos?.x}%`} cy ={`${props?.mousePos?.x}%`} r = "7px"></circle>
                    <circle className="pulsey" cx={`${props?.mousePos?.y}%`} cy ={`${props?.mousePos?.y}%`} r = "10px"></circle>
                </g>} */}
                {elements}
            </g>
        )
    })
    return <>{groups}</>
}

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