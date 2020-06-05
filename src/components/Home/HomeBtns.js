import React from "react";

import "./HomeBtns.css";

function HomeBtns(props) {
  return (
    <div className="home-mainBtns">
      <p id="home-slogan">
        Geography made
        <br /> <span style={{ color: "#74c5e6" }}>Fun</span> and{" "}
        <span style={{ color: "#98e575" }}>Easy!</span>
      </p>
      <div className="home-btns-panel">
        <button id="home-quizBtn" className="selectable" onClick={props.quiz}>
          Quiz
        </button>
        <button id="home-learnBtn" className="selectable" onClick={props.learn}>
          Learn
        </button>
      </div>
    </div>
  );
}

export default HomeBtns;
