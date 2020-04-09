import React from "react";

export default function LearnQuizModal(props) {
  return (
    <div className="learn-quiz-modal">
      <div className="learn-quiz-modal-btn-container">
        <button className="learn-quiz-modal-btn" onClick={props.handleClick}>
          Start Quiz!
        </button>
        <p>{`Countries:  10`}</p>
        <p>{`Capitals:  10`}</p>
        <p>{`Flags:  10`}</p>
      </div>
    </div>
  );
}
