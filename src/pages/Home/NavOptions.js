import React from "react";
import { useHistory } from "react-router-dom";

import QuizButton from "./QuizButton";

import navData from "../../data/gameData/gameSelect";

export default function NavOptions(props) {
  const history = useHistory();
  const handleClick = (event) => {
    history.push(`/${props.mode}/${props.selected}/${event.currentTarget.id}`);
  };
  let quizButtons = null;
  if (props.selected) {
    quizButtons = navData[0][props.selected][props.mode]["links"].map(
      (item) => {
        return (
          <QuizButton
            img={item.img}
            name={item.name}
            link={item.link}
            disabled={item.disabled}
            onClick={handleClick}
          />
        );
      }
    );
  }

  return (
    <div
      className="quiz-link-container"
      style={{ height: props.selected ? "100%" : "350px" }}
    >
      {quizButtons}
    </div>
  );
}
