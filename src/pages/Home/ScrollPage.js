import React, { useState } from "react";

import SelectContinent from "../../components/SelectContinent";
import NavOptions from "./NavOptions";
import ToggleSwitch from "../../components/ToggleSwitch";
import "./scrollpage.css";

export default function ScrollPage(props) {
  const [pageSelect, setPageSelect] = useState(undefined);

  const handleClick = event => {
    setPageSelect(event.target.id);
  };
  let modeStyle = {
    quizBg: "#104779",
    quizBtn: "#173b5b",
    quizHover: "#2170b6",
    quizSelect: "#E7722F",
    learnBg: "#e96214",
    learnBtn: "#e7722f",
    learnHover: "#FF8F50",
    learnSelect: "#173b5b"
  };

  const pageBg = props.mode === "quiz" ? modeStyle.quizBg : modeStyle.learnBg;

  return (
    <div className="scrollpage" style={{ backgroundColor: pageBg }}>
      <div
        className="colBar"
        style={
          props.mode == "quiz"
            ? { backgroundColor: "#0C2E4E" }
            : { backgroundColor: "#6B2A06" }
        }
      ></div>
      <div
        className="colBar"
        style={
          props.mode == "quiz"
            ? { backgroundColor: "#0B365E" }
            : { backgroundColor: "#B55018" }
        }
      ></div>
      <div
        className="colBar"
        style={
          props.mode == "quiz"
            ? { backgroundColor: "#0F4270" }
            : { backgroundColor: "#D76525" }
        }
      ></div>
      <ToggleSwitch setMode={props.setMode} mode={props.mode} />
      <h1 className="selectContinent">Select a Continent</h1>
      <div className="continents-container">
        <div className="continentsRow">
          <SelectContinent
            title="Europe"
            name="eu"
            linkTitle="europe"
            links={["Countries", "Capitals"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
          <SelectContinent
            title="Asia"
            name="as"
            linkTitle="asia"
            links={["Countries", "Capitals"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
          <SelectContinent
            title="South America"
            name="sa"
            linkTitle="south-america"
            links={["Countries", "Capitals"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
          <SelectContinent
            title="Africa"
            name="af"
            linkTitle="africa"
            links={["Countries", "Capitals"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
          <SelectContinent
            title="North America"
            name="na"
            linkTitle="north-america"
            links={["Countries", "Capitals", "US States"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
          <SelectContinent
            title="Oceania"
            name="oc"
            linkTitle="oceania"
            links={["Countries", "Capitals"]}
            handleClick={handleClick}
            selected={pageSelect}
            styles={
              props.mode === "learn"
                ? {
                    bg: modeStyle.learnBg,
                    hover: modeStyle.learnHover,
                    btn: modeStyle.learnBtn,
                    select: modeStyle.learnSelect
                  }
                : {
                    bg: modeStyle.quizBg,
                    hover: modeStyle.quizHover,
                    btn: modeStyle.quizBtn,
                    select: modeStyle.quizSelect
                  }
            }
          />
        </div>
      </div>
      <div className="page-options">
        <NavOptions selected={pageSelect} mode={props.mode} />
      </div>
    </div>
  );
}
