import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SimpleButton from "../../Utils/Button/SimpleButton";
import "../Modal/modal.scss";

const ModalStat = ({ name, value }) => (
  <div className="modal-stat">
    <p className="modal-stat-name">{name}:</p>
    <p className="modal-stat-value">{value}</p>
  </div>
);

export default function PreQuizModal({
  show,
  info,
  stats,
  content,
  gameStart,
  modeSelected = "default",
}) {
  const history = useHistory();
  const [mode, setMode] = useState(modeSelected);
  return (
    <Modal centered size="xl" show={true} className="end-game-modal">
      <Modal.Title id="end-game-title">
        <span id="modal-title-text">Finished!</span>
        {/* <span id="modal-title-title">
          <span>{`< Back`}</span>
          <span>{info?.title}</span>
        </span>
        <span id="end-modal-sub">{info?.sub}</span> */}
      </Modal.Title>
      <Modal.Body>
        <div className="end-modal-stats">
          <ModalStat name="Time" value={stats?.time ?? "0:00"} />
          <ModalStat name="Answered" value={stats?.answered ?? "0/49"} />
          <ModalStat name="Incorrect" value={stats?.wrong ?? "0"} />
          <ModalStat name="Accuracy" value={stats?.accuracy ?? "0%"} />
        </div>
        <SimpleButton
          name="Try Again"
          onClick={() => history.push(history.location.pathname)}
        />
      </Modal.Body>
    </Modal>
  );
}
