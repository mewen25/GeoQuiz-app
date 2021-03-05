import React, { useState, useEffect } from "react";
import { useTimer } from "use-timer";

import GameInfo from "./GameInfo";
import CreateMap from "./CreateMap";
//import ExtraData from "./ExtraData";

export default function GamePage(props) {
  const { time, start, reset } = useTimer();
  //const [finish, setFinish] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [list, setList] = useState(props.data.data);
  const [listArr, setListArr] = useState([]);
  const [find, setFind] = useState({
    data: {},
    simple: {
      name: "",
      image: undefined,
    },
  });
  const [guess, setGuess] = useState(undefined);
  const [answers, setAnswers] = useState({
    correct: [],
    wrong: [],
    skipped: [],
  });
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [pointFeedback, setPointFeedback] = useState({
    points: 0,
    state: false,
  });
  const [finishTime, setFinishTime] = useState(0);
  const totalCountries = Object.keys(props.data.data).length;
  const mapSvgData = props.data.map;
  const maxPoints = props.data.maxPointGain;

  useEffect(() => {
    let newListArr = [];
    for (let [key, _] of Object.entries(list)) {
      newListArr.push(key);
    }
    setListArr(shuffleArray(newListArr));
  }, []);

  useEffect(() => {
    getFind();
  }, [listArr, props.show]);

  const updateMousePosition = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const manageClass = (element, classname, add = true) => {
    let data = Object.assign({}, list);
    if (add && !data[element].class.includes(classname)) {
      data[element].class.push(classname);
    } else if (!add && data[element].class.includes(classname)) {
      const newClasses = data[element].class.filter((c) => c !== classname);
      data[element].class = newClasses;
    }
    setList(data);
  };

  const setupTimer = () => {
    reset();
    //start();
  };

  const getImage = () => {
    var imgPath = null;
    try {
      imgPath = require(`../../assets/images/flags/continents/${props.data.continentId}/${props.data.mode}/${find.simple.name}.png`);
    } catch (e) {
      imgPath = null;
    }
    return imgPath;
  };

  function animate(name, animation, custom = false, instruction = false) {
    let node;
    if (!custom) {
      node = document.querySelector(name);
      node.classList.add("animated", animation);
    } else {
      node = document.querySelector(`#${name}`);
      node.classList.add(animation);
    }
    node.onanimationend = () => {
      if (custom) {
        node.classList.remove(animation);
      } else {
        node.classList.remove("animated", animation);
        if (instruction) {
          setPointFeedback({
            points: 0,
            state: false,
          });
        }
      }
    };
  }

  const getFind = () => {
    if (answers.correct.length < totalCountries) {
      if (!props.show) {
        setupTimer();
        animate("#info-place-name", "bounceIn");
      }
      if (list[listArr[0]]) {
        setFind({
          data: list[listArr[0]],
          simple: {
            name: list[listArr[0]].name,
            image: getImage(list[listArr[0]].name),
          },
        });
      }
    } else {
      handleFinish();
    }
  };

  const handleClick = (event) => {
    const clicked = event.currentTarget.id;
    console.log(
      "compare",
      clicked,
      find.simple.name,
      clicked === find.data.name
    );
    if (list[clicked].class.includes("complete")) {
      return;
    }
    setGuess(list[clicked].name);
    if (list[clicked].name === find.data.name) {
      result(true, clicked);
    } else {
      result(false, clicked);
    }
  };

  const result = (state, found, exception = false) => {
    let newAnswers = Object.assign({}, answers);
    if (state) {
      setListArr(listArr.filter((c) => list[c].name !== list[found].name));
      newAnswers["correct"].push(find.data.name);
      setAnswers(newAnswers);
      manageClass(found, "complete");
      if (!exception) {
        managePoints("correct");
      }
      getFind();
    } else {
      if (!newAnswers.wrong.includes(list[found].name)) {
        newAnswers["wrong"].push(list[found].name);
        setAnswers(newAnswers);
      }
      managePoints("wrong");
      setMisses(misses + 1);
      animate(found, "wrongSelect", true);
    }
  };

  const handleSkip = () => {
    let tempArray = listArr;
    tempArray.push(tempArray.shift());
    setListArr(tempArray);
    getFind();
  };

  const handleShowMe = () => {
    manageClass(find.data.id || find.data.name, "animated zoomIn");
    let newAnswers = Object.assign({}, answers);
    animate(`#${find.data.id || find.data.name}`, "zoomIn");
    result(true, find.data.id || find.data.name, true);
    newAnswers["skipped"].push(find.data.id || find.data.name);
    managePoints("skipped");
    setAnswers(newAnswers);
  };

  const managePoints = (state) => {
    let newPoints;
    const thisTime = time;
    if (state === "correct") {
      newPoints = Math.min(
        Math.max(maxPoints - thisTime * 10, maxPoints * 0.5),
        maxPoints
      );
    } else if (state === "wrong") {
      newPoints = maxPoints * -0.2;
    } else if (state === "skipped") {
      newPoints = -50;
    }
    if (score + newPoints <= 0) {
      setScore(0);
    } else {
      setScore(score + newPoints);
    }
    setPointFeedback({
      points: newPoints,
      state: true,
    });
    animate("#game-pointsScore", "fadeOutUp", false, true);
  };

  const handleFinish = () => {
    setList(props.data.data);
    props.setResults({
      score: answers.correct.length,
      misses: misses,
      skipped: answers.skipped,
      total: totalCountries,
      finalTime: finishTime,
      finalScore: score,
    });
    props.setFinish(true);
  };

  return (
    <div className="game-layout">
      {pointFeedback.state ? (
        <p
          id="game-pointsScore"
          style={{
            color: pointFeedback.points > 0 ? "#2D592F" : "#b95353",
            left: mousePos.x,
            top: mousePos.y - 50,
          }}
        >
          {`${pointFeedback.points > 0 ? "+" : ""}${pointFeedback.points}`}
        </p>
      ) : (
        <p id="game-pointsScore"></p>
      )}
      {!props.show ? (
        <GameInfo
          mode={props.data.mode}
          continent={props.data.continentId}
          place={find.simple}
          correct={answers.correct.length}
          misses={misses}
          score={score}
          total={totalCountries}
          handleSkip={handleSkip}
          handleShowMe={handleShowMe}
          setFinish={setFinishTime}
        />
      ) : null}
      {find.simple?.name ? (
        <CreateMap
          mapData={list}
          svgData={mapSvgData}
          handleClick={handleClick}
          search={find.simple.name}
          mousePos={mousePos}
        />
      ) : null}
      {/* <Map handleClick={handleClick} data={list} search={find.simple.name} /> */}
      {/* {!props.show ? (
        <ExtraData
          place={find.data}
          mode={props.data.mode}
          continent={props.data.continentId}
        />
      ) : null} */}
    </div>
  );
}
