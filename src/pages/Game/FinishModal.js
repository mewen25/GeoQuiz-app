import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import GameButton from "./GameButton";

const GameModal = (props) => {
  const gameAccuracy = Math.round(
    ((props.info.score - props.info.skipped.length) /
      (props.info.misses + props.info.total)) *
      100
  ); //.toFixed(1);

  const [gameScore] = useState({
    score: props.info.score - props.info.skipped.length,
    answerPercent: Math.round(
      ((props.info.score - props.info.skipped.length) / props.info.total) * 100
    ),
    misses: props.info.misses,
    accuracy: gameAccuracy,
  });
  const history = useHistory();

  const verdict = () => {
    if (gameAccuracy === 100) {
      return "Perfect Score!";
    } else if (gameAccuracy > 80) {
      return "Very good!";
    } else if (gameAccuracy > 50) {
      return "Not bad!";
    } else {
      return "Try Again?";
    }
  };

  return (
    <div className="game-setup">
      <Modal
        centered
        size="xl"
        show={props.finish}
        dialogClassName="game-modal-content"
      >
        <Modal.Title id="finish-modal-title">{verdict()}</Modal.Title>
        <Modal.Body>
          <div className="finish-scores">
            <div id="finish-info-col-1" className="finish-info-col">
              <h2 className="finish-score-subtitle">Answered:</h2>
              <img alt="tick" src={require("../../assets/images/tick.png")} />
              <h2>
                {gameScore.score}/{props.info.total}
              </h2>
              <h2>{gameScore.answerPercent}%</h2>
            </div>
            <div id="finish-info-col-2" className="finish-info-col">
              <h2 className="finish-score-subtitle">Accuracy: </h2>
              <img alt="cross" src={require("../../assets/images/cross.png")} />
              <h2>{gameScore.misses}</h2>
              <h2>{gameScore.accuracy}%</h2>
            </div>
            <div id="finish-info-col-3" className="finish-info-col">
              <h2 className="finish-score-subtitle">Time: </h2>
              <h2>
                {new Date(props.info.finalTime * 1000)
                  .toISOString()
                  .substr(14, 5)}
              </h2>
            </div>
          </div>
          <div className="finish-info-score">
            <h2 id="finish-score-title">Total Score:</h2>
            <h1 id="finish-score">{props.info.finalScore}</h1>
          </div>
          <div className="game-modal-btns">
            <GameButton
              name="Try Again"
              id="finish-modal-replayBtn"
              colour="#6297E5"
              handleClick={() => window.location.reload()}
            />
            <GameButton
              name="Home"
              id="finish-modal-homeBtn"
              colour="#6297E5"
              handleClick={() => history.push("/")}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GameModal;
