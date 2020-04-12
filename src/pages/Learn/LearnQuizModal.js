import React from "react";

export default function LearnQuizModal(props) {
  return (
    <div className="learn-quiz-modal">
      <div className="learn-quiz-modal-btn-container">
        <button className="learn-quiz-modal-btn" onClick={props.handleClick}>
          Start Quiz!
        </button>
        <p>Countries</p>
        <p>Capitals</p>
        <p>Flags</p>
      </div>
    </div>
  );
}
