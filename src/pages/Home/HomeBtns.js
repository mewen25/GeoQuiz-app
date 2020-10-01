import React from "react";
import { useHistory } from "react-router-dom";

export default function HomeBtns() {
  const history = useHistory();
  
  return (
    <div className="home-mainBtns">
      <p id="home-slogan">
        Geography made<br /> <span style={{ color: "#74c5e6" }}>Fun</span> and{" "}
        <span style={{ color: "#98e575" }}>Easy!</span>
        </p>
      <div className="home-btns-panel">
        <button id="home-quizBtn" className="selectable" onClick={() => history.push("/quiz")}>
          Quiz
        </button>
        <button id="home-learnBtn" className="selectable" onClick={() => history.push("/learn")}>
          Learn
        </button>
      </div>
    </div>
  );
}
