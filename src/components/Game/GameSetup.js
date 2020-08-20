import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import QuizPage from "../Quiz/QuizPage";
import GameModal from "../../pages/Game/GameModal";
import gameData from "../../data/config/continentData";
import { GameContext } from "../Utils/gameContext";

export default function GameSetup({ match }) {
  const { setHeaderState } = useContext(GameContext);
  const [quizValues, setQuizValues] = useState();
  const [show, setShow] = useState(true);
  const gameSetup = () => {
    let data = _.cloneDeep(gameData[match.params.continent]);
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
    setHeaderState(false);

    return () => {
      setHeaderState(true);
    }
  }, []);

  return (
    <>
      {quizValues?.map ? <QuizPage show={show} data={quizValues} /> : null}
      <GameModal show={show} gameStart={() => setShow(false)} />
    </>
  );
}
