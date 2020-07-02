import React, { useState } from "react";

import { ReactComponent as Europe } from "../../assets/maps/europe_test.svg";
// import {ReactComponent as Background} from "../../assets/images/quiz-bg-blue.svg";
import QuizInfos from "./QuizInfos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import "./game1.css";

function GamePage({ show, data }) {
  console.log("game page data", data);
  const [find, setFind] = useState({
    data: {},
    simple: {
      name: "Yo",
      image: undefined,
    },
    list: data.data,
  });
  const [guesses, setGuesses] = useState({
    current: undefined,
    answers: {
      correct: [],
      wrong: [],
      skipped: [],
    },
    score: {
      points: 0,
      score: 0,
      misses: 0,
      time: 0,
    },
  });

  const handleClick = (event) => {
    const clicked = event.currentTarget.id;
    setGuesses((prevData) => ({
      ...prevData,
      current: find.list[clicked].name,
    }));
  };

  return (
    <div className="game" bg="green">
      <div className="quiz-page">
        <QuizHeader />
        <QuizInfos />
        <div className="quiz-map">
          {find.simple?.name && (
            <CreateMap
              mapData={find.list}
              svgData={data.map}
              handleClick={handleClick}
              search={find.simple.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
