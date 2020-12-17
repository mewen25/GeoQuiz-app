import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../components/Quiz/Modal/modal.scss";

const GameModal = (props) => {
  const history = useHistory();
  return (
    <div className="game-setup">
      <Modal
        centered
        size="xl"
        show={props.show}
        dialogClassName="game-modal-content"
      >
        <Modal.Title id="game-modal-title">{props.title}</Modal.Title>
        <Button
          id="back-btn"
          variant="success"
          onClick={() => history.push("/")}
        >
          {`Back`}
        </Button>
        <Modal.Body>
          {props.content}
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
