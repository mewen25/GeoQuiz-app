import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import QuizPage from "../Quiz/QuizPage";
import GameModal from "../../pages/Game/GameModal";
import PreQuizModal from "../Quiz/Modal/PreQuizModal";
import gameData from "../../data/config/continentData";
import { GameContext } from "../Utils/gameContext";
import { useHistory } from "react-router-dom";

export default function GameSetup({ match }) {
  const { setHeaderState } = useContext(GameContext);
  const [quizValues, setQuizValues] = useState({});
  const [show, setShow] = useState(true);
  const history = useHistory();

  const gameSetup = () => {
    let data = _.cloneDeep(gameData[match.params.continent]);
    if (data && match.params.quiz) {
      // console.log("thje data", data);
      setQuizValues({
        info: {
          continent: data.continent,
          mode: data.mode[match.params.quiz].title,
          quizType: data.mode[match.params.quiz].quizType,
          count:
            data?.mode?.[match.params.quiz]?.data &&
            Object.entries(data.mode[match.params.quiz].data).length,
        },
        continentId: data.continentId,
        continent: data.continent,
        map: data.mode[match.params.quiz].map,
        data: data.mode[match.params.quiz].data,
        layout: data.mode[match.params.quiz].layout || "normal",
      });
    }
  };

  useEffect(() => {
    // console.log(match, match.params, history.location);

    if (!match.params.quiz) {
      // history.go(`/quiz/europe/countries`);
      history.replace(`${history.location.pathname}/countries`);
      return;
    }

    gameSetup();
    setHeaderState(false);

    return () => {
      setHeaderState(true);
    };
  }, [match]);

  const getPathInfo = (path) => {
    const newPath = path.slice(1).split("/");
    return {
      type: newPath[0],
      continent: newPath[1],
      mode: newPath[2],
      fullPath: path.slice(1),
    };
  };

  const handleGameStart = (mode) => {
    if (mode === "default") {
      const path = getPathInfo(history.location.pathname);
      // console.log("path d", path, quizValues);
      history.replace(`${quizValues.info.quizType}`);
      setShow(false);
    }
    if (mode === "multiple-choice") {
      const path = getPathInfo(history.location.pathname);
      console.log("path", path);
      console.log(history, quizValues);
      history.replace(`${quizValues.info.quizType}-${mode}`);
      setShow(false);
    }
  };

  return (
    <>
      {quizValues?.map ? <QuizPage show={show} data={quizValues} /> : null}
      <PreQuizModal
        info={{
          title: `${quizValues?.info?.continent} ${quizValues?.info?.mode} Quiz`,
          sub: `${quizValues?.info?.count} Countries`,
        }}
        show={show}
        gameStart={(mode) => handleGameStart(mode)}
      />
    </>
  );
}
