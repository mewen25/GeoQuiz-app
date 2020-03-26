import React from "react";

import InfoPlace from "./Info/InfoPlace";
import InfoScore from "./Info/InfoScore";
import HelpBtns from "./Info/HelpBtns";
import InfoMisses from "./Info/InfoMisses";

import "./Info/info.css";

export default function GameInfo(props) {
  return (
    <div className="info-container">
      <InfoPlace
        place={props.place.name}
        mode={props.mode}
        continent={props.continent}
      />
      <InfoScore
        correct={props.correct}
        total={props.total}
        points={props.points}
        time={props.time}
        finalTime={props.handleFinish}
      />
      <HelpBtns
        handleSkip={props.handleSkip}
        handleShowMe={props.handleShowMe}
      />
      <InfoMisses misses={props.misses} />
    </div>
  );
}

{
  /* <div id="game-section">
            <ToSelect
              search={search}
              guess={guess}
              correct={answerCount.correct}
              wrong={answerCount.wrong}
              data={totalCountries}
              show={props.show}
              continent={props.data.continentId}
              mode={props.data.mode}
              score={points.total}
              answers={correctAnswers}
              //time={props.data.time}
              finish={handleGameFinish}
              finalTime={setFinishTime}
            />
          </div>
          <div className="game-extras">
            <div className="game-extras-col-1">
              <GameButton
                name="Skip"
                id="game-skipButton"
                colour="#88C955"
                handleClick={handleSkip}
              />
              <GameButton
                name="Show Me"
                id="game-showMeButton"
                colour="#6297E5"
                handleClick={handleShowMe}
              />
            </div>
          </div>
           */
}
