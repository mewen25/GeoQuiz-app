import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuizButton from "./QuizButton";

import navData from "../../data/gameData/gameSelect";

export default function NavOptions(props) {
  const history = useHistory();
  //const navData = ;

  const handleClick = event => {
    history.push(`/${props.mode}/${props.selected}/${event.currentTarget.id}`);
  };

  if (props.selected) {
    var quizButtons = navData[0][props.selected][props.mode]["links"].map(
      item => {
        return (
          <QuizButton
            img={item.img}
            name={item.name}
            link={item.link}
            onClick={handleClick}
          />
        );
      }
    );
  } else {
    var quizButtons = null;
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
