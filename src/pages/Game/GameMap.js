import React, { useState, useEffect, useRef } from "react";

import { useTimer } from "use-timer";
import ToSelect from "./ToSelect";

import GameInfo from "./GameInfo";
import SkipBtn from "./SkipBtn";
import ShowMeBtn from "./ShowMeBtn";
import GameButton from "./GameButton";
import FinishModal from "./FinishModal";

const GameMap = (props) => {
  let showPoints = 0;
  const { time, start, reset } = useTimer();
  let timer = null;
  const [countryList, setCountryList] = useState(props.data.data);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [points, setPoints] = useState({
    current: 0,
    total: 0,
    sign: "",
    colour: "#fff",
  });
  const [questionTimer, setQuestionTimer] = useState(0);
  const [search, setSearch] = useState({});
  const [searchIndex, setSearchIndex] = useState();
  const [guess, setGuess] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState({
    correct: 0,
    wrong: 0,
  });
  const [totalCountries, setTotalCountries] = useState(
    Object.keys(props.data.data).length
  );
  const [missCount, setMissCount] = useState([]);
  const [showMeCount, setShowMeCount] = useState(0);
  const [finishTime, setFinishTime] = useState(0);
  const mapRef = useRef(null);
  const Map = props.data.map;

  let col = "#56b953";
  let currentMisses = 0;

  let displayPoints = "none";
  useEffect(() => {
    setCountryList(shuffleArray(props.data.data));
    setTotalCountries(props.data.data.length);
    gameQuestion(props.data.data);
    //loadStyles();
  }, [props.show]);

  // function loadStyles() {
  //   const load = props.data.continent;
  //   const mode = props.data.mode;
  //   if (load == "Europe") {
  //     if (mode == "Countries") {
  //       require("../../data/mapData/Continents/Europe/colours.css");
  //     } else if (mode == "Capitals") {
  //       require("../../data/mapData/Continents/Europe/Capitals/colours.css");
  //     }
  //   } else if (load == "North America") {
  //     if (mode == "Countries" || mode == "Capitals") {
  //       require("../../data/mapData/Continents/North-America/colours.css");
  //     } else if (mode == "US States" || mode == "US State Capitals") {
  //       require("../../data/mapData/Other/States/colours.css");
  //     }
  //   } else if (load == "Asia") {
  //     require("../../data/mapData/Continents/Asia/colours.css");
  //   } else if (load == "Oceania") {
  //     require("../../data/mapData/Continents/Oceania/colours.css");
  //   } else if (load == "Africa") {
  //     require("../../data/mapData/Continents/Africa/colours.css");
  //   } else if (load == "South America") {
  //     require("../../data/mapData/Continents/South-America/colours.css");
  //   }
  // }

  useEffect(() => {
    gameQuestion();
  }, [answerCount.correct]);

  let pointsStyle = {
    left: mousePos.x,
    top: mousePos.y,
    //display: displayPoints,
    colour: col,
    fontSize: 50,
  };

  useEffect(() => {
    console.log("search", search, props.data.data);
  }, [search]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function handleAnimation(element, animationName, own = false) {
    const node = document.querySelector(element);
    if (!own) {
      node.classList.add("animated", animationName);
    } else {
      node.classList.add(animationName);
    }
    if (element == "#game-pointsScore") {
      node.classList.add("doDisplay");
      node.classList.remove("noDisplay");
    }

    const handleAnimationEnd = () => {
      node.classList.remove("animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);
      if (element == "#game-pointsScore") {
        node.classList.remove(".doDisplay");
        node.classList.add("noDisplay");
      }
    };
    node.addEventListener("animationend", handleAnimationEnd);
  }

  const handlePoints = (correct) => {
    let newPoints = 0;
    let newSign = "";
    let col = "#56b953";

    if (correct == true) {
      newSign = "+";
      newPoints += 100;
      if (time < 1) {
        newPoints += 200;
        return;
      } else if (time < 3) {
        newPoints += 100;
      } else if (time < 5) {
        newPoints += 20;
      }
    } else if (correct == "show") {
      col = "#b95353";
      newSign = "";
      newPoints -= 200;
    } else {
      col = "#b95353";
      newSign = "";
      newPoints -= 50;
    }

    setPoints((prevData) => ({
      current: newPoints,
      total:
        points.total + points.current < 0 ? 0 : points.total + points.current,
      sign: newSign,
      colour: col,
    }));
  };

  const gameQuestion = (data = countryList) => {
    console.log("datass", data, data[0]);
    setupTimer();
    if (answerCount.correct < totalCountries) {
      if (!props.show) {
        handleAnimation(".info-place", "bounceIn");
      }
      currentMisses = 0;
      setSearch(data[0]);
      setSearchIndex(0);
    } else {
      //handleGameFinish();
    }
  };

  const setupTimer = () => {
    reset();
    start();
  };

  const completeSearch = () => {
    handleAnimation("#game-pointsScore", "fadeOutUp");
    var findGuess = document.getElementById(search.id || search.name);
    findGuess.classList.add("selected");
    setCountryList(countryList.filter((country) => country != search));
    const newNumber =
      answerCount.correct < totalCountries
        ? answerCount.correct + 1
        : totalCountries;
    setAnswerCount((prevData) => ({ ...prevData, correct: newNumber }));
    setCorrectAnswers((prevData) => [...prevData, search.id || search.name]);
    setMissCount((prevData) => [...prevData, currentMisses]);
    gameQuestion();
  };

  // const handleGameFinish = () => {
  //   const someData = props.data.data.map(country => {
  //     var findGuess = document.getElementById(country.id || country.name);
  //     //findGuess.classList.remove("selected");
  //   });
  //   props.setFinish(true);
  //   props.setResults({
  //     score: answerCount,
  //     skipped: showMeCount,
  //     misses: missCount,
  //     total: totalCountries,
  //     totalScore: points.total,
  //     finalTime: finishTime
  //   });
  // };

  const handleClick = (event) => {
    //console.log(answerCount.correct);
    const clicked = event.target.id;
    setMousePos({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
    if (
      !correctAnswers.includes(clicked) &&
      clicked != "Map" &&
      clicked != "None" &&
      clicked != "Map1"
    ) {
      if (clicked != "Map") {
        setGuess(clicked);
      }
      if (clicked == search.id || clicked == search.name) {
        completeSearch();
        handlePoints(true);
      } else {
        handleAnimation("#game-pointsScore", "fadeOutUp");
        handlePoints(false);
        setWrongAnswers((prevData) => [...prevData, clicked]);
        currentMisses += 1;
        const newNumber = answerCount.wrong + 1;
        setAnswerCount((prevData) => ({ ...prevData, wrong: newNumber }));
        const txt = document.querySelector(`#${clicked}`);
        handleAnimation(`#${clicked}`, "wrongSelect", true);
        handlePoints(false);
      }
      setGuesses((prevData) => [...prevData, clicked]);
    }
  };

  const handleSkip = () => {
    var array = countryList;
    array.push(array.shift());
    setCountryList(array);
    gameQuestion();
  };

  const handleShowMe = () => {
    setShowMeCount(showMeCount + 1);
    handleAnimation(`#${search.id || search.name}`, "zoomIn");
    handlePoints("show");
    completeSearch();
  };

  return (
    <div className="game-layout">
      {/* <SVGMap
        map={props.data.map}
        onLocationClick={handleClick}
        guess={guess}
      /> */}
      <div className="game-testthing">
        <p id="game-pointsScore" className="noDisplay" style={pointsStyle}>
          {points.sign}
          {points.current != 0 ? points.current : null}
        </p>
      </div>
      {!props.show ? (
        <GameInfo
          mode={props.data.mode}
          continent={props.data.continentId}
          place={search}
          correct={answerCount.correct}
          misses={answerCount.wrong}
          total={totalCountries}
          points={points.total}
          time={time}
          handleSkip={handleSkip}
          handleShowMe={handleShowMe}
          handleFinish={setFinishTime}
        />
      ) : null}
      <Map handleClick={handleClick} data={props.data.data} />
    </div>
  );
};

export default GameMap;
