import React from "react";

import { ReactComponent as Europe } from "../../assets/maps/europe_test.svg";
// import {ReactComponent as Background} from "../../assets/images/quiz-bg-blue.svg";
import QuizInfos from "./QuizInfos/QuizInfos";

import OtherLink from "./OtherLink/OtherLink";
import "./game1.css";

function GamePage() {
  return (
    <div className="game" bg="green">
      <div className="quiz-page">
          <div>
            <div className="quiz-header">
                <div className="quiz-other-links">
                    <OtherLink />
                    <OtherLink />
                    <OtherLink />
                </div>
                <h2>Europe Quiz</h2>
            </div>
            <QuizInfos />
          </div>
        {/* <div className="quiz-map">
            <Europe />
        </div> */}
      </div>
    </div>
  );
}

export default GamePage;
