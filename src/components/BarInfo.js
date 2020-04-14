import React from "react";
import "./barInfo.css";

export default function BarInfo(props) {
  return (
    <div className="barInfo">
      {props.one.place ? (
        <>
          <div className="barInfo-one">
            <div id="barInfo-one-flex1">
              <p>{props.one.place}</p>
              <img alt={props.one.place} src={props.one.img} />
            </div>

            <div id="barInfo-one-flex2">
              <p>{props.one.place ? `Capital: ${props.one.sub}` : null}</p>
            </div>
          </div>
          {props.two.population ? (
            <div className="barInfo-two">
              <p>
                Population:{" "}
                <span style={{ color: "#ED5A5A" }}>{props.two.population}</span>
              </p>
              <p>
                Land Area:{" "}
                <span style={{ color: "#ED5A5A" }}>{props.two.land}</span>
              </p>
              <p>
                Languages:{" "}
                <span style={{ color: "#ED5A5A" }}>{props.two.language}</span>
              </p>
              <p>
                National Animal:{" "}
                <span style={{ color: "#ED5A5A" }}>{props.two.animal}</span>
              </p>
            </div>
          ) : null}
        </>
      ) : null}
      <div className="barInfo-three">
        {props.three.map((link) => (
          <p id={link} onClick={props.handleClick}>
            •{link}
          </p>
        ))}
      </div>
    </div>
  );
}
