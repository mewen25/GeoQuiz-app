import React, { useState, useEffect } from "react";
import LearnQuizType from "./LearnQuizType";
import LearnQuizModes from "./LearnQuizModes";
import LearnQuizButtons from "./LearnQuizButtons";
import LearnNorthernEuropeQuiz from "./LearnNorthernEuropeQuiz";

function LearnQuiz(props) {
  console.log(props);
  const [list, setList] = useState(props.data);
  const [listArr, setListArr] = useState({
    Countries: [],
    Capitals: [],
    Flags: [],
  });
  const [searchList, setSearchList] = useState(undefined);
  const [searchType, setSearchType] = useState("country");
  const [find, setFind] = useState(null);
  const [misses, setMisses] = useState(0);
  const Map = props.map;
  const [mode, setMode] = useState("Countries");

  useEffect(() => {
    createListArr();
  }, []);

  function getImage(country) {
    let img;
    try {
      img = require(`../../assets/images/flags/continents/${props.continent}/Countries/${country}.png`);
    } catch (e) {
      img = null;
    }
    return img;
  }

  // function resetQuiz() {
  //   setQuizStart(false);
  //   if (finish) {
  //     setFinish(false);
  //   }
  //   Map = props.map;
  //   createListArr();
  // }

  function createListArr() {
    let newListArr = Object.assign({}, listArr);
    for (let [_, value] of Object.entries(list)) {
      newListArr.country.push(value.name);
      newListArr.capital.push(value.capital);
      newListArr.flag.push(getImage(value.name));
    }
    console.log("settin countries", newListArr.country);
    props.setCountries(newListArr.country);
    setListArr({
      country: shuffleArray(newListArr.country, "country"),
      capital: shuffleArray(newListArr.capital, "capital"),
      flag: shuffleArray(newListArr.flag, "flag"),
    });
  }

  useEffect(() => {
    console.log("reset?", props);
    //resetQuiz();
  }, [props.data]);

  useEffect(() => {
    //createListArr();
  }, [props.finish]);

  useEffect(() => {
    if (listArr[searchType]) {
      if (!searchList) {
        setSearchList(listArr);
      }
      //getFind();
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

  function createListArr() {
    let newListArr = Object.assign({}, listArr);
    for (let [_, value] of Object.entries(list)) {
      newListArr.Countries.push(value.name);
      newListArr.Capitals.push(value.capital);
      newListArr.Flags.push(getImage(value.name));
    }
    console.log("settin countries", newListArr.Countries);
    props.setCountries(newListArr.Countries);
    setListArr({
      Countries: shuffleArray(newListArr.Countries, "country"),
      Capitals: shuffleArray(newListArr.Capitals, "capital"),
      Flags: shuffleArray(newListArr.Flags, "flag"),
    });
  }

  const quizButtons = listArr[mode].map((b) => (
    <LearnQuizButtons
      content={mode === "Flags" ? <img src={b} alt="quiz-flag" /> : <p>{b}</p>}
    />
  ));

  return (
    <div className="learn-quiz-page">
      <LearnQuizModes mode={mode} setMode={setMode} />
      <h1 id="LQ-title">
        Test Yourself <i className="LQ-arrow"></i>
      </h1>
      <div className="LQ-gamearea">
        <div className="LQ-buttons">{quizButtons}</div>
        {props.data ? <LearnNorthernEuropeQuiz /> : null}
      </div>
    </div>
  );
}

export default LearnQuiz;
