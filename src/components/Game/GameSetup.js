import React, { useState, useEffect } from "react";
import QuizPage from "../Quiz/QuizPage";
import GameModal from "../../pages/Game/GameModal";
import gameData from "../../data/config/continentData";

export default function GameSetup({ match }) {
  const [quizValues, setQuizValues] = useState();
  const [show, setShow] = useState(true);
  const gameSetup = () => {
    const data = gameData[match.params.continent];
    console.log("game setup", data);
    if (data) {
      setQuizValues({
        info: {
          continent: data.continent,
          mode: data.mode[match.params.quiz].title,
        },
        continentId: data.continentId,
        continent: data.continent,
        map: data.mode[match.params.quiz].map,
        data: data.mode[match.params.quiz].data,
      });
    }
  };

  useEffect(() => {
    gameSetup();
  }, []);

  return (
    <>
      {quizValues?.map ? <QuizPage show={show} data={quizValues} /> : null}
      <GameModal show={show} gameStart={() => setShow(false)} />
    </>
  );
}
