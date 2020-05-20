import React, { useState, useEffect } from "react";
import "./styles.css";
import Data from "./data";
import Map from "./Map";

export default function App() {
  const [data, setData] = useState(Data);
  const [MadeMap, setMadeMap] = useState(null);

  const createMap = () => {
    return (
      <svg className="game-map" viewBox={data.viewBox} label={data.label} >
        {getGroups}
      </svg>
    )
  }

  const getGroups = () => {
    let groups = data.elements.map(obj => {
      const g = obj[Object.keys(obj)[0]];
      const paths = g.d[0].map(p => <path d={p} />);
      const group = (
        <g id={g.id} className={g.id}>
          {paths}
        </g>
      )
      return group;
    })
    console.log("done my groups", groups);
    return groups;
  }

  useEffect(() => {
    createMap();
  }, []);

  useEffect(() => {
    console.log("made the map?", MadeMap);
  }, [MadeMap]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Map map={MadeMap} />
    </div>
  );
}

// className={props.data["United-Kingdom"].class.join(" ")}
//           onClick={props.handleClick}
//           fill={props.data["United-Kingdom"].styles[0]}
//           fillRule="nonzero"
//           data-tip={`${props.search}?`}
