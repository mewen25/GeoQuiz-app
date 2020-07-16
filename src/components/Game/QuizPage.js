import React, { useState, useEffect } from "react";

import { ReactComponent as Europe } from "../../assets/maps/europe_test.svg";
// import {ReactComponent as Background} from "../../assets/images/quiz-bg-blue.svg";
import QuizInfos from "./QuizInfos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import "./game1.css";

function GamePage({ show, data }) {
  const [find, setFind] = useState({
    data: data?.data,
    simple: {
      name: undefined,
      image: undefined,
    },
    list: formatList(data.data),
    totals: {
      all: formatList(data.data).length,
    }
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
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);

  function formatList(obj) {
    let tempArr = [];
    for (let [key, _] of Object.entries(obj)) tempArr.push(key);
    return shuffleArray(tempArr);
  }

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  const getFind = () => {
    const list = find.list;
    const answers = guesses.answers;
    const totalCountries = find.totals.all;
    if (answers.correct.length < totalCountries) {
      if (list[0]) {
        const place = find.data[list[0]].name;
        setFind(prevData => ({
          ...prevData,
          simple: {
            name: place,
            image: getImage(place),
          },
        }));
      }
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

  const handleGuess = (place) => {
    const isCorrect = place === find.simple.name;
    console.log("guess", isCorrect, place)
    if(isCorrect) {
      setFind(prevData => ({
        ...prevData,
        list: prevData.list.filter(c => c !== place)
      }));
    }
  }

  const getImage = () => {
    var imgPath = null;
    try {
      imgPath = require(`../../assets/images/flags/continents/${continent.toLowerCase()}/${data.info.mode}/${find.simple.name}.png`);
    } catch (e) {
      imgPath = null;
    }
    return imgPath;
  };

  useEffect(() => {
    console.log("game page data", data);
    console.log("get new", find.list);
    getFind();
  },[find.list])

  return (
    <div className="game" bg="green">
      <div className="quiz-page">
        <QuizHeader />
        <span style={{display: "inline-block"}}>
        <QuizInfos place={find?.simple?.name} />
        </span>
        <div className="main-container">
          <div className="quiz-side">
          
          </div>
          <div className="quiz-map">
            {find.simple?.name && (
              <CreateMap
                mapData={find.data}
                svgData={data.map}
                handleClick={handleClick}
                search={find.simple.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
