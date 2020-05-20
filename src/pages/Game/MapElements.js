import React from 'react';
const MapElements = (props) => {
    console.log("render");
    const groups = props.svgData.elements.map((obj, index) => {
        const g = obj[Object.keys(obj)[0]];
        let handler=[];
        if(props.mapData[g.id] && !props.mapData[g.id].class.includes("complete")){
            handler = [`data-tip data-for=search onClick=${props.handleClick}`];
        }
        const paths = g.d.map((p, index) => <path key={index} d={p} />)
        return( 
            <g id={g.id} key={index} {...handler} onClick={props.handleClick} className={props.mapData[g.id] ? props.mapData[g.id].class.join(" ") : "other"} fill={props.mapData[g.id] ? props.mapData[g.id].styles[0] : "#e67"}>
                {paths}
            </g>
        )
    })
    return <>{groups}</>
}

export default MapElements;