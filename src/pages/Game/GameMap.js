import React, { useState, useEffect, useRef } from "react";

import { useTimer } from "use-timer";
import ToSelect from "./ToSelect";
import { SVGMap } from "react-svg-map";

import "../../data/mapData/Continents/North-America/colours.css";
import "../../data/mapData/Continents/Asia/colours.css";
import "../../data/mapData/Continents/Europe/colours.css";
import "../../data/mapData/Continents/South-America/colours.css";
import "../../data/mapData/Continents/Africa/colours.css";
import "../../data/mapData/Continents/Oceania/colours.css";
import "../../data/mapData/Other/States/colours.css";
import "../../data/mapData/Continents/Europe/Capitals/colours.css";

import SkipBtn from "./SkipBtn";
import ShowMeBtn from "./ShowMeBtn";
import GameButton from "./GameButton";
import FinishModal from "./FinishModal";

const GameMap = props => {
  let showPoints = 0;
  const { time, start, reset } = useTimer();
  let timer = null;
  const [countryList, setCountryList] = useState(props.data.data);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const [points, setPoints] = useState({
    current: 0,
    total: 0,
    sign: "",
    colour: "#fff"
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
    wrong: 0
  });
  const [totalCountries, setTotalCountries] = useState(props.data.data.length);
  const [missCount, setMissCount] = useState([]);
  const [showMeCount, setShowMeCount] = useState(0);
  const mapRef = useRef(null);

  let col = "#56b953";
  let currentMisses = 0;

  let displayPoints = "none";
  useEffect(() => {
    setCountryList(props.data.data);
    setTotalCountries(props.data.data.length);
    gameQuestion(props.data.data);
  }, [props.show, props.data.mode]);

  useEffect(() => {
    gameQuestion();
  }, [answerCount.correct]);

  let pointsStyle = {
    left: mousePos.x,
    top: mousePos.y,
    //display: displayPoints,
    colour: col,
    fontSize: 50
  };

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

  const handlePoints = correct => {
    let newPoints = 0;
    let newSign = "";
    let col = "#56b953";

    if (correct) {
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
    } else {
      col = "#b95353";
      newSign = "";
      newPoints -= 50;
    }

    if (points.total + newPoints < 0) {
      newPoints = 0;
    }

    setPoints(prevData => ({
      current: newPoints,
      total: points.total + points.current,
      sign: newSign,
      colour: col
    }));
  };

  const gameQuestion = (data = countryList) => {
    setupTimer();
    console.log("comparing", answerCount.correct, totalCountries);
    if (answerCount.correct < totalCountries) {
      let countryIndex = 0;
      let selectedCountry = null;
      if (search != null) {
        selectedCountry = search;
        do {
          countryIndex = Math.floor(Math.random() * data.length);
          selectedCountry = data[countryIndex];
        } while (selectedCountry == search && data.length > 1);
      }
      if (!props.show) {
        handleAnimation("#game-place", "bounceIn");
      }
      currentMisses = 0;
      setSearch(selectedCountry);
      setSearchIndex(countryIndex);
    } else {
      handleGameFinish();
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
    setCountryList(countryList.filter(country => country != search));
    const newNumber =
      answerCount.correct < totalCountries
        ? answerCount.correct + 1
        : totalCountries;
    setAnswerCount(prevData => ({ ...prevData, correct: newNumber }));
    setCorrectAnswers(prevData => [...prevData, search.id || search.name]);
    setMissCount(prevData => [...prevData, currentMisses]);
    gameQuestion();
  };

  const handleGameFinish = () => {
    const someData = props.data.data.map(country => {
      var findGuess = document.getElementById(country.id || country.name);
      //findGuess.classList.remove("selected");
    });
    props.setFinish(true);
    props.setResults({
      score: answerCount,
      skipped: showMeCount,
      misses: missCount,
      total: totalCountries,
      totalScore: points.total
    });
  };

  const handleClick = event => {
    //console.log(answerCount.correct);
    const clicked = event.target.id;
    setMousePos({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY
    });
    // console.log("clicked:", clicked, "Looking for:", search.name);
    if (clicked != "Map") {
      setGuess(clicked);
    }
    if (!correctAnswers.includes(clicked) && clicked != "Map") {
      if (clicked == search.id || clicked == search.name) {
        completeSearch();
        handlePoints(true);
      } else {
        handleAnimation("#game-pointsScore", "fadeOutUp");
        handlePoints(false);
        setWrongAnswers(prevData => [...prevData, clicked]);
        currentMisses += 1;
        const newNumber = answerCount.wrong + 1;
        setAnswerCount(prevData => ({ ...prevData, wrong: newNumber }));
        const txt = document.querySelector(`#${clicked}`);
        handleAnimation(`#${clicked}`, "wrongSelect", true);
        handlePoints(false);
      }
      setGuesses(prevData => [...prevData, clicked]);
    }
  };

  const handleSkip = () => {
    gameQuestion();
  };

  const handleShowMe = () => {
    setShowMeCount(showMeCount + 1);
    handleAnimation(`#${search.id || search.name}`, "zoomIn");
    completeSearch();
  };

  return (
    <div className="game-layout">
      <div className="game-testthing">
        <p id="game-pointsScore" className="noDisplay" style={pointsStyle}>
          {points.sign}
          {points.current != 0 ? points.current : null}
        </p>
      </div>
      <div id="game-map">
        <SVGMap
          map={props.data.map}
          onLocationClick={handleClick}
          guess={guess}
          ref={mapRef}
        />
      </div>
      {!props.show ? (
        <>
          <div id="game-section">
            <ToSelect
              search={search}
              guess={guess}
              correct={answerCount.correct}
              wrong={answerCount.wrong}
              data={totalCountries}
              show={props.show}
              continent={props.data.continentId}
              mode={props.data.mode}
              score={points.total}
              answers={correctAnswers}
            />
          </div>
          <div className="game-extras">
            <div className="game-extras-col-1">
              <GameButton
                name="Skip"
                id="game-skipButton"
                colour="#88C955"
                handleClick={handleSkip}
              />
              <GameButton
                name="Show Me"
                id="game-showMeButton"
                colour="#6297E5"
                handleClick={handleShowMe}
              />
            </div>
          </div>
          <div className="game-missCounter-container">
            <img src={require("../../assets/images/cross.png")} />
            <h2 id="game-missCounter">{answerCount.wrong}</h2>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GameMap;
