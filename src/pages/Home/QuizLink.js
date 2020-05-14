import React from "react";

const QuizLink = (props) => (
  <div className="quiz-link-container">
    <div className="quiz-link-links">{props.quizzes}</div>
    <div className="quiz-link-links">{props.learns}</div>
    <img id={`continent-img-${props.continentLink}`} alt={`continent-${props.name}`} src={props.img} />
    <p>{props.name}</p>
  </div>
);

export default QuizLink;
