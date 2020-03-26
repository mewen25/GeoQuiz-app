import React, { useContext } from "react";
import { ModeContext } from "../../components/modeContext";

export default function QuizButton(props) {
  const { mode, setModeState } = useContext(ModeContext);
  return (
    <div
      className="quiz-button-container"
      id={props.link}
      onClick={props.onClick}
      data-aos="zoom-in"
    >
      <img
        src={require("../../assets/images/" + props.img)}
        style={{ width: "100%", margin: "0 auto" }}
      />
      <div
        className="quiz-button-label"
        style={
          mode === "quiz"
            ? { backgroundColor: "#0D3961" }
            : { backgroundColor: "#ff8f50" }
        }
      >
        {props.name}
      </div>
    </div>
  );
}
