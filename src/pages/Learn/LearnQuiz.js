import React, { useState, useEffect } from "react";

import LearnQuizModal from "./LearnQuizModal";
import LearnQuizInfo from "./LearnQuizInfo";
import LearnQuizFinish from "./LearnQuizFinish";

export default function LearnQuiz(props) {
  const [quizStart, setQuizStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [list, setList] = useState(props.data);
  const [listArr, setListArr] = useState({
    country: [],
    capital: [],
    flag: [],
  });
  const [searchList, setSearchList] = useState(undefined);
  const [searchType, setSearchType] = useState("country");
  const [find, setFind] = useState(null);
  const [misses, setMisses] = useState(0);
  const Map = props.map;

  function getImage(country) {
    let img;
    try {
      img = require(`../../assets/images/flags/continents/${props.continent}/Countries/${country}.png`);
    } catch (e) {
      img = null;
    }
    return img;
  }

  useEffect(() => {
    let newListArr = Object.assign({}, listArr);
    for (let [_, value] of Object.entries(list)) {
      newListArr.country.push(value.name);
      newListArr.capital.push(value.capital);
      newListArr.flag.push(getImage(value.name));
    }
    props.setCountries(newListArr.country);
    setListArr({
      country: shuffleArray(newListArr.country, "country"),
      capital: shuffleArray(newListArr.capital, "capital"),
      flag: shuffleArray(newListArr.flag, "flag"),
    });
  }, [props.finish]);

  useEffect(() => {
    if (listArr[searchType]) {
      if (!searchList) {
        setSearchList(listArr);
      }
      getFind();
    }
  }, [listArr, searchType]);

  useEffect(() => {
    setMisses(0);
  }, [find]);

  const getHighlightColour = () => {
    var col;
    var txt = "black";
    if (misses === 0) {
      col = "#72C54B";
    } else if (misses === 1) {
      col = "#E7A525";
    } else {
      col = "#ED5A5A";
    }
    return { padding: "0 4px", backgroundColor: col, color: txt };
  };

  function shuffleArray(array, type) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function changeQuiz() {
    for (let [key, _] of Object.entries(list)) {
      manageClass(key, "complete", false);
    }
    animate("#learn-map-quiz", "fadeIn");
    if ((searchType = "country")) {
      setSearchType("capital");
    } else if (searchType === "capital") {
      setSearchType("flag");
    } else if (searchType === "flag") {
      setFinish(true);
    }
  }

  const getFind = () => {
    if (listArr[searchType].length > 0) {
      setFind(listArr[searchType][0]);
    } else {
      changeQuiz();
    }
  };

  function animate(name, animation, custom = false) {
    let node;
    if (!custom) {
      node = document.querySelector(name);
      node.classList.add("animated", animation);
    } else {
      node = document.querySelector(`#${name}`);
      console.log(node);
      if (node) {
        node.classList.add(animation);
      }
    }
    node.onanimationend = () => {
      if (custom) {
        node.classList.remove(animation);
      } else {
        node.classList.remove("animated", animation);
      }
    };
  }

  const manageClass = (element, classname, add = true) => {
    let data = Object.assign({}, list);
    if (add && !data[element].class.quiz.includes(classname)) {
      data[element].class.quiz.push(classname);
    } else if (!add && data[element].class.quiz.includes(classname)) {
      const newClasses = data[element].class.quiz.filter(
        (c) => c !== classname
      );
      data[element].class.quiz = newClasses;
    }
    setList(data);
  };

  const handleClick = (event) => {
    const clicked = event.currentTarget.id;
    if (list[clicked].class.quiz.includes("complete")) {
      return;
    }
    if (
      list[clicked].name === find ||
      list[clicked].capital === find ||
      list[clicked].flag === find
    ) {
      result(true, clicked);
    } else {
      result(false, clicked);
    }
  };

  const result = (state, found, exception = false) => {
    if (state) {
      animate("#learn-quiz-search", "bounceIn");
      let newListArr = Object.assign({}, listArr);
      newListArr[searchType] = newListArr[searchType].filter((c) => find !== c);
      setListArr(newListArr);
      manageClass(found, "complete");
      getFind();
    } else {
      setMisses(misses + 1);
      //animate(found, "wrongSelect", true);
    }
  };

  return (
    <div className="learn-quiz-page">
      {!quizStart ? <LearnQuizModal handleClick={setQuizStart} /> : null}
      {finish ? <LearnQuizFinish /> : null}
      <div className="learn-quiz-title-container">
        {/* <h2 id="learn-quiz-title">Test This New Knowledge!</h2> */}
        {quizStart && !finish ? (
          <LearnQuizInfo
            searchType={searchType}
            searchList={searchList}
            find={find}
            listArr={listArr}
            misses={misses}
            getHighlightColour={getHighlightColour}
          />
        ) : null}
      </div>
      <div className="learn-quiz-map-container">
        <div id="learn-map-quiz">
          <Map
            data={list}
            type="quiz"
            handleClick={!finish ? handleClick : null}
          />
        </div>
      </div>
    </div>
  );
}
