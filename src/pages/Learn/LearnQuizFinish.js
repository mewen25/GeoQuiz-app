import React from "react";
import { useHistory } from "react-router-dom";

import GameButton from "../Game/GameButton";

export default function LearnQuizFinish() {
  const history = useHistory();
  return (
    <div className="learn-quiz-modal">
      <div className="learn-quiz-finish-container">
        <h2>Well done!</h2>
        <p>Figure out where you'd like to go next with the links below.</p>
      </div>
      <div className="learn-finish-links">
        <GameButton
          name="Home"
          id="finish-modal-homeBtn"
          colour="#6297E5"
          handleClick={() => history.push("/")}
        />
        <GameButton
          name="Europe Quiz"
          id="finish-modal-replayBtn"
          colour="#6297E5"
          handleClick={() => history.push("/quiz/europe/countries")}
        />
      </div>
    </div>
  );
}
