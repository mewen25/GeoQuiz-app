import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SimpleButton from "../../Utils/Button/SimpleButton";
import { ReactComponent as Arrow } from "../../../assets/images/misc/arrow.svg";
import "../Modal/modal.scss";

import { formatList, shuffleArray } from "../../../utils/quizFunctions";

const ModalMode = ({ label, modeName, selected, setSelected, type }) => (
  <div
    className={type ?? "modal-mode"}
    data-selected={
      selected === modeName ||
      (selected === "countries" && modeName === "default")
    }
    onClick={() => setSelected(modeName)}
  >
    <p>{label}</p>
    <div className="modal-mode-radio">
      <div className="radio-inner" />
    </div>
  </div>
);

const getListAmount = (amount, data) => {
  const _data = shuffleArray(formatList(data));
  var len = _data.length;
  // if (amount === "All") return _data.length;
  if (amount === "Long") len = _data.length * 0.75;
  else if (amount === "Half") len = _data.length * 0.5;
  else if (amount === "Quick") len = _data.length * 0.25;

  return _data.slice(0, Math.floor(len));
};

const QuizLength = ({ data, list, dropdown, setDropdown }) => {
  if (!list) list = ["All", "Long", "Half", "Quick"];

  useEffect(() => {
    console.log("DROP", dropdown);
  }, [dropdown]);

  list = list.map((l) => ({
    label: l,
    listData: data && getListAmount(l, data),
  }));

  return (
    <div className="pre-modal-length">
      <div className="dropdown-container">
        <h3>Countries:</h3>
        <div className="length-dropdown">
          <select
            onChange={(e) => {
              console.log("selected", e.target.value, e.target);
              setDropdown(list[e.target.value]);
            }}
          >
            {list.map(
              (l, idx) =>
                l.listData && (
                  <option
                    value={idx}
                  >{`${l.label} x${l.listData.length}`}</option>
                )
            )}
          </select>
        </div>
      </div>
      {dropdown && dropdown.label !== "All" ? (
        <div className="dropdown-list">
          {dropdown.listData.map((l, idx) => (
            <p>
              {l}
              {idx < dropdown.listData.length - 1 && `,`}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default function PreQuizModal({
  show,
  info,
  content,
  gameStart,
  modeSelected = "default",
  modalModes,
  quizData,
}) {
  const history = useHistory();
  const [mode, setMode] = useState(modeSelected);
  const [dropdown, setDropdown] = useState(null);

  return (
    <Modal centered size="xl" show={show} className="pre-game-modal">
      <Modal.Title id="pre-game-title">
        <div className="pre-game-title-top">
          <div id="modal-back" onClick={() => history.push("/quiz")}>
            <Arrow style={{ marginRight: "8px", marginBottom: "2px" }} />
            Back
          </div>
          <span id="modal-title-text">{info?.title}</span>
        </div>
        <div id="modal-title-sub">
          {quizData && Object.keys(quizData).length} countries
        </div>
      </Modal.Title>
      <Modal.Body>
        <QuizLength
          data={quizData}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        <div className="pre-modal-modes">
          {modalModes &&
            modalModes.map((m) => (
              <ModalMode
                type="modal-mode-horizontal"
                {...m}
                selected={mode}
                setSelected={setMode}
              />
            ))}
        </div>
        <SimpleButton
          name="Start"
          onClick={() => gameStart(mode, dropdown?.listData)}
        />
      </Modal.Body>
    </Modal>
  );
}
