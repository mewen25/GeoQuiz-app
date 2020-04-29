import React from "react";

export default function HomeBtns(props) {
  return (
    <div className="home-mainBtns">
      <div className="home-btns-panel">
        <p>
          Geography made <span style={{ color: "#74c5e6" }}>Fun</span> and{" "}
          <span style={{ color: "#98e575" }}>Easy!</span>
        </p>
        <button id="home-quizBtn" className="selectable" onClick={props.quiz}>
          QUIZ
        </button>
        <button id="home-learnBtn" className="selectable" onClick={props.learn}>
          Learn
        </button>
      </div>
    </div>
  );
}

//onClick={props.learn}
