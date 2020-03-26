import React, { useState, useEffect } from "react";
import data from "../../data/mapData/Continents/Europe/Europe";
import "./learn.css";
import GameModal from "../Game/GameModal";
import learnDatas from "../../data/gameData/learningData";

export default function Learn({ match }) {
  const continent = match.params.continent;
  const thisMap = match.params.learn;
  const data = learnDatas[0][continent][thisMap];
  const Map = data.map;
  const [show, setShow] = useState(true);
  const [learn, setLearn] = useState(undefined);
  const [prevLearn, setPrevLearn] = useState(undefined);
  const [learnData, setLearnData] = useState({
    name: "",
    capital: "",
    population: "",
    language: "",
    flag: ""
  });

  var imgPath = null;
  try {
    imgPath = require(`../../assets/images/flags/continents/${continent}/Countries/${learn}.png`);
  } catch (e) {
    imgPath = null;
  }

  const [mapData, setMapData] = useState(
    learnDatas[0][continent][thisMap]["countries"]
  );

  useEffect(() => {
    if (learn) {
      let newState = Object.assign({}, mapData);
      newState[0][learn].class = "country selected";
      if (prevLearn) {
        newState[0][prevLearn].class = "country";
      }
      setMapData(newState);
      setPrevLearn(learn);
    }
  }, [learn]);

  useEffect(() => {
    return () => {
      let newState = Object.assign({}, mapData);
      for (let [key, value] of Object.entries(mapData[0])) {
        newState[0][key].class = "country";
      }
      setMapData(newState);
    };
  }, []);

  function handleClick(event) {
    const selected = event.currentTarget.id;
    setLearn(selected);
    if (learn != selected) {
      //getCountryData(selected);
    }
  }

  // function getCountryData(country) {
  //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //     .then(response => response.json())
  //     .then(data =>
  //       setLearnData({
  //         name: data[0].name,
  //         capital: data[0].capital,
  //         population: data[0].population
  //           .toString()
  //           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
  //         language: data[0].languages,
  //         flag: data[0].flag
  //       })
  //     );
  // }

  function getFontSize(word) {
    const limit = 12;
    let size;
    if (word.length >= limit) {
      size = "34px";
    } else {
      size = "54px";
    }
    return size;
  }

  const handleStart = () => {
    setShow(false);
  };

  const modalContent = (
    <div className="game-modal-info">
      <h2>
        • Interact and study the <b>{Object.keys(mapData[0]).length}</b>{" "}
        Countries found in <b>{learnDatas[0][continent][thisMap].title}</b>!
      </h2>
      <h2>
        • When you're ready, feel free to proceed with the 'Next' button to a
        small <b>Quiz</b> on the countries presented here.
      </h2>
    </div>
  );

  return (
    <div className="learn-page">
      <div className="learn-title">
        <h2>{data.title}</h2>
      </div>
      <div className="learn-page-container">
        {learn ? (
          <div id="learning-info-container" data-aos="zoom-in">
            <div id="learning-info-name">
              <div id="learning-info-title">
                <h2 style={{ fontSize: getFontSize(learn) }}>{learn}</h2>
              </div>
              <img alt={`${mapData[0][learn].name}-flag`} src={imgPath} />
            </div>
            <div id="learning-infos" data-aos="zoom-in">
              <h2>Capital: {mapData[0][learn].capital}</h2>
              <h4>Population: {mapData[0][learn].population}</h4>
              <h4>Land Area: {mapData[0][learn].land}</h4>
              <h4>Language(s): {mapData[0][learn].language}</h4>
              <h4>National Animal: {mapData[0][learn].animal}</h4>
            </div>
          </div>
        ) : (
          <GameModal
            show={show}
            title={<h1>Learning {learnDatas[0][continent][thisMap].title}</h1>}
            content={modalContent}
            gameStart={handleStart}
          />
        )}
        <div className="learn-map-container">
          <Map handleClick={handleClick} data={mapData[0]} />
        </div>
      </div>
    </div>
  );
}

{
  /* <svg
        width="auto"
        height="auto"
      >
        <path id="uk" fill="blue" d={data.locations[0].path} />
      </svg> */
}
