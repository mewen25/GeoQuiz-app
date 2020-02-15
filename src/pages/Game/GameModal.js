import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import OptionButtons from "./OptionButtons";

const GameModal = props => {
  const [gameMode, setGameMode] = useState(1);
  const history = useHistory();

  const buttons = () => {
    console.log(props);
    if (props.continent == "North America") {
      return ["Countries", "Capitals", "States"];
    } else {
      return ["Countries", "Capitals"];
    }
  };

  return (
    <div className="game-setup">
      <Modal
        centered
        size="xl"
        show={props.show}
        dialogClassName="game-modal-content"
      >
        <Modal.Title id="game-modal-title">
          Geography <b>{props.mode}</b> Quiz!
        </Modal.Title>
        <Modal.Body>
          <Button
            id="back-btn"
            variant="info"
            onClick={() => history.push("/")}
          >{`Go Back`}</Button>
          <OptionButtons
            btns={buttons()}
            handleClick={event =>
              props.changeMode(event.target.name.toLowerCase())
            }
            currentMode={props.mode}
          />
          <div className="game-modal-info">
            <div className="info-flex">
              <h1>Time:</h1>
              <h1>{props.time}</h1>
            </div>
            <div className="info-flex">
              <h1>{props.mode}:</h1>
              <h1>{props.findAmount}</h1>
            </div>
            <div className="info-flex">
              <h1>Continent:</h1>
              <h1>{props.continent}</h1>
            </div>
          </div>
          <div className="game-modal-start">
            <Button
              variant="success"
              size="lg"
              block
              name="start"
              onClick={props.gameStart}
            >
              START
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GameModal;
