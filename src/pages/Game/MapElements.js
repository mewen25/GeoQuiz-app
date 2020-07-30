import React from 'react';
const MapElements = (props) => {
    const groups = props.svgData.elements.map((obj, index) => {
        const countryColour = props.colour[Math.floor(Math.random() * props.colour.length)];
        let handler = [];
        const id = obj.id;
        if(props.mapData[id] && !props.mapData[id].class.includes("complete")) {
            handler = [`data-tip data-for=search onClick=${props.handleClick}`];
        }
        const elements = obj.render.map((e, index) => {
            let element = <></>;
            if(e.type === "path") element = <path key={index} {...e.attributes} />;
            else if(e.type === "rect") element = <rect key={index} {...e.attributes} style={{fill: "none"}} />
            else if(e.type === "circle") element = <ellipse key={index} {...e.attributes} style={{fill:"white",fillOpacity:"0",stroke:"rgb(228,95,95)", strokeWidth:"2px"}} />

            return element;
        })
        const handles = {
            key: index,
            id: id,
            onClick: props.mapData[id] && props.handleClick,
            className: props.mapData[id] && props.mapData[id].class.join(" ") || `other`,
            ["data-tip"]: props.mapData[id] && !props.mapData[id].class.includes(["complete", "other"]) || false,
            ["data-for"]: "search",
            fill: props.mapData[id] && props.mapData[id].colour||"#e67",
        }
        return(
            <g {...handles} >
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