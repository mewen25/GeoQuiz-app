import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SimpleButton from "../../Utils/Button/SimpleButton";
import "../Modal/modal.scss";

const ModalMode = ({ label, modeName, selected, setSelected }) => (
  <div className="modal-mode" data-selected={selected === modeName} onClick={() => setSelected(modeName)}>
    <p>{label}</p>
    <div className="modal-mode-radio"><div className="radio-inner" /></div>
  </div>
)

export default function PreQuizModal({ show, info, content, gameStart, modeSelected="default" }) {
  const history = useHistory();
  const [mode, setMode] = useState(modeSelected);
  return (
      <Modal
        centered
        size="xl"
        show={show}
        className="pre-game-modal"
      >
        <Modal.Title id="pre-game-title">
            <span id="modal-title-title">{info?.title}</span>
            <span id="modal-sub">{info?.sub}</span>
        </Modal.Title>
        {/* <Button
          id="back-btn"
          variant="success"
          onClick={() => history.push("/")}
        >
          {`Back`}
        </Button> */}
        <Modal.Body>
          <div className="pre-modal-modes">
            <ModalMode label="Default" modeName="default" selected={mode} setSelected={setMode} />
            <ModalMode label="Multiple Choice" modeName="multiple" selected={mode} setSelected={setMode} />
            <ModalMode label="Hinted" modeName="hinted" selected={mode} setSelected={setMode} />
          </div>
          <SimpleButton name="Start" onClick={gameStart} />
          {/* <Button variant="info" size="lg" name="Start" onClick={gameStart} /> */}
          {/* {content}
          <div className="game-modal-start">
            <Button
              variant="success"
              size="lg"
              block
              name="start"
              onClick={gameStart}
            >
              START
            </Button>
          </div> */}
        </Modal.Body>
      </Modal>
  );
}
