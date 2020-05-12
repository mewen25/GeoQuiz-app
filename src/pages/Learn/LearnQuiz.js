import React, { useState, useEffect } from "react";
import LearnQuizType from "./LearnQuizType";
import LearnQuizModes from "./LearnQuizModes";
import LearnQuizButtons from "./LearnQuizButtons";
import LearnNorthernEuropeQuiz from "./LearnNorthernEuropeQuiz";

function LearnQuiz(props) {
  const [list, setList] = useState(props.data);
  const [listArr, setListArr] = useState({
    Countries: [],
    Capitals: [],
    Flags: [],
  });
<<<<<<< Updated upstream
  const [searchList, setSearchList] = useState(undefined);
  const [searchType, setSearchType] = useState("country");
  const [find, setFind] = useState(null);
  const [misses, setMisses] = useState(0);
  const Map = props.map;
=======
  const [mode, setMode] = useState("Countries");

  useEffect(() => {
    createListArr();
  }, []);
>>>>>>> Stashed changes

  function getImage(country) {
    let img;
    try {
      img = require(`../../assets/images/flags/continents/${props.continent}/Countries/${country}.png`);
    } catch (e) {
      img = null;
    }
    return img;
  }

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
  function shuffleArray(array, type) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

<<<<<<< Updated upstream
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
=======
  function createListArr() {
    let newListArr = Object.assign({}, listArr);
    for (let [_, value] of Object.entries(list)) {
      newListArr.Countries.push(value.name);
      newListArr.Capitals.push(value.capital);
      newListArr.Flags.push(getImage(value.name));
>>>>>>> Stashed changes
    }
    console.log("settin countries", newListArr.Countries);
    props.setCountries(newListArr.Countries);
    setListArr({
      Countries: shuffleArray(newListArr.Countries, "country"),
      Capitals: shuffleArray(newListArr.Capitals, "capital"),
      Flags: shuffleArray(newListArr.Flags, "flag"),
    });
  }

<<<<<<< Updated upstream
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
=======
  const quizButtons = listArr[mode].map((b) => (
    <LearnQuizButtons
      content={mode === "Flags" ? <img src={b} alt="quiz-flag" /> : <p>{b}</p>}
    />
  ));
>>>>>>> Stashed changes

  return (
    <div className="learn-quiz-page">
      <LearnQuizModes mode={mode} setMode={setMode} />
      <h1 id="LQ-title">
        Test Yourself <i className="LQ-arrow"></i>
      </h1>
      <div className="LQ-gamearea">
        <div className="LQ-buttons">{quizButtons}</div>
        <LearnNorthernEuropeQuiz />
      </div>
    </div>
  );
}

export default LearnQuiz;
