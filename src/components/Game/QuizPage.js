import React, { useState, useEffect } from "react";

import { ReactComponent as Europe } from "../../assets/maps/europe_test.svg";
// import {ReactComponent as Background} from "../../assets/images/quiz-bg-blue.svg";
import QuizInfos from "./QuizInfos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import "./game1.css";

function GamePage({ show, data }) {
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
  console.log("gues", guesses);
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);

  useEffect(() => {
    if(!find.data) return
    let newObj = {};
    for(const key in find.data) {
      newObj[key] = {
        ...find.data[key],
        colour: countryColours[theme][Math.floor(Math.random() * 2)]
      }
    }
    setFind(prevData => ({
      ...prevData,
      data: newObj
    }));
  },[])

  function formatList(obj) {
    let tempArr = [];
    for (let [key, _] of Object.entries(obj)) tempArr.push(key);
    return shuffleArray(tempArr);
  }

  const manageClass = (element, classname, add = true) => {
    let data = find.data;
    if(add && data[element] && !data[element].class.includes(classname)) {
      data[element].class.push(classname);
    }
    setFind(prevData => ({
      ...prevData,
      data
    }))
  };

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
        setFind((prevData) => ({
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
    // console.log("guess", isCorrect, place)
    if (isCorrect) {
      setFind((prevData) => ({
        ...prevData,
        list: prevData.list.filter((c) => c !== place),
      }));
      // const correctArr = guesses.answers.correct;
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          correct: [...prevData.answers.correct, place],
        },
        score: {
          ...prevData.score,
          marks: prevData.score.marks + 1
        }
      }));
      manageClass(place, "complete");
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
  };

  const getImage = () => {
    var imgPath = null;
    try {
      imgPath = require(`../../assets/images/flags/continents/${continent.toLowerCase()}/${
        data.info.mode
      }/${find.simple.name}.png`);
    } catch (e) {
      imgPath = null;
    }
    return imgPath;
  };

  useEffect(() => {
    getFind();
  }, [find.list]);

  const countryColours = {
    blue: ["#285979", "#3A7195"],
    green: ["#3E7D53", "#4A9B61"],
    yellow: ["#F5E158", "#FCEB7B"],
    red: ["#F55858", "#FC7B7B"],
  };

  return (
    <div className="game" bg={theme}>
      <div className="quiz-page">
        <QuizHeader />
        <p>{guesses.current}</p>
        <div className="main-container">
          <QuizInfos data={{ type: "top", place: find?.simple?.name }} />
          <QuizInfos data={{ type: "side", marks: guesses.score.marks, total: find.totals.all }} infoName="quiz-side-container" />
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
}

export default GamePage;
