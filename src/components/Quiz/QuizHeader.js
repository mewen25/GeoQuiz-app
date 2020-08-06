import React from "react";
import OtherLink from "../Game/OtherLink/OtherLink";

export default function QuizHeader() {
  return (
    <div className="quiz-header">
      <div className="quiz-other-links">
        <OtherLink />
        <OtherLink />
        <OtherLink />
      </div>
      <h2>Europe Quiz</h2>
    </div>
  );
}
