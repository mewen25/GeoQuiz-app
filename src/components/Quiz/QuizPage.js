import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  assignColour,
  completeGuess,
  formatList,
  manageClass,
  getFlag,
} from "../../utils/quizFunctions";

import { ReactComponent as Exit } from "../../assets/images/game/exit.svg";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import ThemeSwitch from "../Utils/Game/ThemeSwitch";
import SmallsPanel from "./Infos/SmallsPanel";
import "../Game/game1.css";

const countryColours = {
  blue: ["#285979", "#3A7195"],
  green: ["#3E7D53", "#4A9B61"],
  yellow: ["#F5E158", "#FCEB7B"],
  red: ["#F55858", "#FC7B7B"],
};
const guiColours = {
  blue: ["#90AEDB", "#fff"],
  green: ["#90AEDB", "#fff"],
  yellow: ["#90AEDB", "#fff"],
  red: ["#90AEDB", "#fff"],
};

function QuizPage({ show, data }) {
  const [theme, setTheme] = useState("blue");
  const [find, setFind] = useState({
    data: data?.data,
    savedData: Object.assign(data?.data, {}),
    simple: {
      name: undefined,
      image: undefined,
    },
    list: formatList(data.data),
    totals: {
      all: formatList(data.data).length,
    },
    smalls: [],
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
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);
  let history = useHistory();

  useEffect(() => {
    const smalls = Object.values(data.data).reduce((acc, cur) => {
      return cur.small ? [...acc, cur] : [...acc];
    }, []);
    setFind((prev) => ({
      ...find,
      smalls: smalls,
    }));
  }, []);

  useEffect(() => {
    if (!find.data) return;
    setFind((prevData) => ({
      ...prevData,
      data: assignColour(countryColours[theme], find.data),
    }));
  }, [theme]);

  const getFind = () => {
    const totalCountries = find.totals.all;
    if (guesses.answers.correct.length < totalCountries && find.list[0]) {
      setCurrentAttempts(0);
      const place = find.data[find.list[0]].name;
      setFind((prevData) => ({
        ...prevData,
        simple: {
          name: place,
          id: find.data[find.list[0]].id || null,
          image: getFlag(data.continentId, data.info.mode, place),
        },
      }));
    }
  };

  const handleClick = (event) => {
    const clicked = event?.currentTarget?.id||event;
    const list = find.data;
    if (list[clicked].class.includes("complete")) return;

    const place = find.data[clicked].id || find.data[clicked].name;
    setGuesses((prevData) => ({
      ...prevData,
      current: place,
    }));
    handleGuess(place);
  };

  useEffect(() => {
    getFind();
  }, [find.list]);

  const handleSkip = () => {
    let tempArr = find.list;
    tempArr.push(tempArr.shift());
    setFind(prev => ({
      ...prev,
      list: tempArr
    }));
    getFind();
  }

  const handleShow = () => {

  }

  return (
    <div className="game" bg={theme}>
      <div className="quiz-page">
        <Exit className="exit" onClick={() => history.push("/")} />
        {/* <QuizHeader /> */}
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <div className="game-view">
          <QuizInfos
            place={find?.simple}
            marks={guesses?.score?.marks}
            total={find?.totals?.all}
            colour={guiColours[theme]}
            handleSkip={handleSkip}
            handleShow={handleShow}
          />
          <div className="quiz-map">
            <SmallsPanel smalls={find.smalls} handleClick={handleClick} />
            {find.simple?.name && (
              <CreateMap
                mapData={find.data}
                svgData={data.map}
                handleClick={handleClick}
                search={find.simple.name}
                colour={countryColours["green"]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function handleGuess(place) {
    const isCorrect =
      place === find.simple?.id || place === find.simple.name ? true : false;
    if (isCorrect) {
      setFind((prevData) => ({
        ...prevData,
        list: prevData.list.filter((c) => c !== place),
      }));
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          correct: [
            ...prevData.answers.correct,
            { place: place, attempts: currentAttempts },
          ],
        },
        score: {
          ...prevData.score,
          marks: prevData.score.marks + 1,
        },
      }));
      setFind((prev) => ({
        ...prev,
        data: completeGuess(place, currentAttempts, find.data)
      }));
      setFind((prev) => ({
        ...prev,
        data: manageClass(place, "complete", find.data),
      }));
    } else {
      setCurrentAttempts((prev) => {
        if(prev > 0) return 2;
        return prev + 1;
      });
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
