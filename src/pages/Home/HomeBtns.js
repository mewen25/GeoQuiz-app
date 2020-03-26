import React from "react";

export default function HomeBtns(props) {
  return (
    <div className="home-mainBtns">
      <button id="home-quizBtn" className="selectable" onClick={props.quiz}>
        QUIZ
      </button>
      <button id="home-learnBtn" className="selectable" onClick={props.learn}>
        Learn
      </button>
    </div>
  );
}

//onClick={props.learn}
