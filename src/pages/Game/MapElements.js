import React from 'react';
const MapElements = (props) => {
    const groups = props.svgData.elements.map((obj, index) => {
        let handler = [];
        const id = obj.id;
        if(props.mapData[id] && !props.mapData[id].class.includes("complete")) {
            handler = [`data-tip data-for=search onClick=${props.handleClick}`];
        }
        const elements = obj.render.map(e => {
            let element = <></>;
            if(e.type === "path") element = <path {...e.attributes} />;
            else if(e.type === "rect") element = <rect {...e.attributes} style={{fill: "none"}} />
            else if(e.type === "circle") element = <ellipse {...e.attributes} style={{fill:"white",fillOpacity:"0",stroke:"rgb(228,95,95)", strokeWidth:"1px"}} />

            return element;
        })
        return(
            <g id={id} key={index} {...handler} data-tip data-for="search" onClick={props.handleClick} className={props.mapData[id] ? props.mapData[id].class.join(" ") : "quiz-country"} fill={props.mapData[id] ? props.mapData[id].styles[0] : "#e67"}>
                {elements}
            </g>
        )
    })
    return <>{groups}</>
}

export default MapElements;

// const g = obj[Object.keys(obj)[0]];
//         let handler=[];
//         if(props.mapData[g.id] && !props.mapData[g.id].class.includes("complete")){
//             handler = [`data-tip data-for=search onClick=${props.handleClick}`];
//         }
//         console.log("got g", g, g.d);
//         const paths = g.d.map((p, index) => <path key={index} d={p} />)