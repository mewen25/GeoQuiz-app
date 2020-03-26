import React, { useState, useEffect } from "react";
import { useTimer } from "use-timer";

import GameInfo from "./GameInfo";

export default function GamePage(props) {
  const { time, start, reset } = useTimer();
  const [list, setList] = useState(props.data.data);
  const [listArr, setListArr] = useState([]);
  const [find, setFind] = useState({
    name: ""
  });
  const [guess, setGuess] = useState(undefined);
  const [answers, setAnswers] = useState({
    correct: [],
    wrong: [],
    skipped: []
  });
  const [misses, setMisses] = useState(0);
  const [status, setStatus] = useState({
    finish: [],
    wrong: ""
  });
  const totalCountries = Object.keys(props.data.data).length;
  const Map = props.data.map;

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
    } else if (!add) {
      console.log(classname);
      data[element].class.filter(item => item != classname);
    }
    setList(data);
  };

  function animate(name, animation, custom = false) {
    const node = document.querySelector(name);
    if (custom) {
      node.classList.add(animation);
    } else {
      node.classList.add("animated", animation);
    }
    node.onanimationend = () => {
      if (custom) {
        node.classList.remove(animation);
      } else {
        node.classList.remove("animated", animation);
      }
    };
  }

  const getFind = () => {
    if (answers.correct.length + answers.skipped.length < totalCountries) {
      if (!props.show) {
        animate("#info-place-name", "bounceIn");
      }
      setFind(list[listArr[0]]);
    }
  };

  const handleClick = event => {
    const clicked = event.currentTarget.id;
    if (list[clicked].class.includes("complete")) {
      return;
    }
    setGuess(list[clicked].name);
    if (list[clicked].name == find.name) {
      result(true, clicked);
    } else {
      result(false, clicked);
    }
  };

  const result = (state, found) => {
    let newAnswers = Object.assign({}, answers);
    if (state) {
      manageClass(found, "animated flash shown", false);
      setListArr(listArr.filter(c => list[c].name != list[found].name));
      newAnswers["correct"].push(find.name);
      setAnswers(newAnswers);
      manageClass(found, "complete");
      getFind();
    } else {
      if (!newAnswers.wrong.includes(list[found].name)) {
        newAnswers["wrong"].push(list[found].name);
        setAnswers(newAnswers);
      }
      setMisses(misses + 1);
      animate(`#${found}`, "wrongSelect", true);
    }
  };

  const handleSkip = () => {
    let tempArray = listArr;
    tempArray.push(tempArray.shift());
    setListArr(tempArray);
    getFind();
  };

  //   useEffect(() => {
  //     if (!props.show) {
  //       result(true, find.id || find.name);
  //     }
  //   }, [answers.skipped]);

  const handleShowMe = () => {
    manageClass(find.id || find.name, "animated flash shown");
    let newAnswers = Object.assign({}, answers);
    //animate(`#${find.id || find.name}`, "flash");
    newAnswers["skipped"].push(find.id || find.name);
    setAnswers(newAnswers);
    //result(true, find.id || find.name);
    //managePoints("show");
  };

  return (
    <div className="game-layout">
      {!props.show ? (
        <GameInfo
          mode={props.data.mode}
          continent={props.data.continentId}
          place={find}
          correct={answers.correct.length}
          misses={misses}
          total={totalCountries}
          handleSkip={handleSkip}
          handleShowMe={handleShowMe}
        />
      ) : null}
      <Map handleClick={handleClick} data={list} />
    </div>
  );
}
