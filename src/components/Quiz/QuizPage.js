import React, { useState, useEffect } from "react";

import {
  assignColour,
  formatList,
  manageClass,
  getFlag,
} from "../../utils/quizFunctions";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import ThemeSwitch from "../Utils/Game/ThemeSwitch";
import "../Game/game1.css";

const countryColours = {
  blue: ["#285979", "#3A7195"],
  green: ["#3E7D53", "#4A9B61"],
  yellow: ["#F5E158", "#FCEB7B"],
  red: ["#F55858", "#FC7B7B"],
};

function QuizPage({ show, data }) {
  const [theme, setTheme] = useState("blue");
  const [find, setFind] = useState({
    data: data?.data,
    simple: {
      name: undefined,
      image: undefined,
    },
    list: formatList(data.data),
    totals: {
      all: formatList(data.data).length,
    },
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
      marks: 1,
      misses: 0,
      time: 0,
    },
  });
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);

  useEffect(() => {
    if (!find.data) return;
    console.log("theme", theme);
    setFind((prevData) => ({
      ...prevData,
      data: assignColour(countryColours[theme], find.data),
    }));
  }, [theme]);

  const getFind = () => {
    const totalCountries = find.totals.all;
    if (guesses.answers.correct.length < totalCountries && find.list[0]) {
      const place = find.data[find.list[0]].name;
      setFind((prevData) => ({
        ...prevData,
        simple: {
          name: place,
          image: getFlag(continent, data.info.mode, place),
        },
      }));
    }
  };

  const handleClick = (event) => {
    const clicked = event.currentTarget.id;
    const list = find.data;
    if (list[clicked].class.includes("complete")) return;

    const place = find.data[clicked].name;
    setGuesses((prevData) => ({
      ...prevData,
      current: place,
    }));
    handleGuess(place);
  };

  useEffect(() => {
    getFind();
  }, [find.list]);

  return (
    <div className="game" bg={theme}>
      <div className="quiz-page">
        <QuizHeader />
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <p>{guesses.current}</p>
        <div className="main-container">
          <QuizInfos data={{ type: "top", place: find?.simple?.name }} />
          <QuizInfos
            data={{
              type: "side",
              marks: guesses.score.marks,
              total: find.totals.all,
            }}
            infoName="quiz-side-container"
          />
          <div className="quiz-map">
            {find.simple?.name && (
              <CreateMap
                mapData={find.data}
                svgData={data.map}
                handleClick={handleClick}
                search={find.simple.name}
                colour={countryColours[theme]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function handleGuess(place) {
    const isCorrect = place === find.simple.name;
    if (isCorrect) {
      setFind((prevData) => ({
        ...prevData,
        list: prevData.list.filter((c) => c !== place),
      }));
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          correct: [...prevData.answers.correct, place],
        },
        score: {
          ...prevData.score,
          marks: prevData.score.marks + 1,
        },
      }));
      setFind((prev) => ({
        ...prev,
        data: manageClass(place, "complete", find.data),
      }));
    } else {
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          wrong: !guesses.answers.wrong.includes(place)
            ? [...prevData.answers.wrong, place]
            : prevData.answers.wrong,
        },
        score: {
          ...prevData.score,
          misses: prevData.score.misses + 1,
        },
      }));
    }
  }
}

export default QuizPage;
