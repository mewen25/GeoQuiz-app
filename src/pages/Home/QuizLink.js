import React from "react";

const QuizLink = (props) => (
  <div className="quiz-link-container">
    <div className="quiz-link-continent">
      <img alt={`continent-image-${props.name}`} src={props.img} />
      <div className="quiz-link-label">
        <p>{props.name}</p>
      </div>
    </div>
    <div className="quiz-link-links">{props.links}</div>
  </div>
);

export default QuizLink;
