import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//import data from "../../data/mapData/Continents/Europe/Europe";
import "./learn.css";
import { GameContext } from "../../components/gameContext";
import GameModal from "../Game/GameModal";
import learnDatas from "../../data/gameData/learningData";
//import MapQuiz from "../../data/mapData/Continents/Europe/Learn/LearnNorthernEuropeQuiz";
import LearnQuiz from "./LearnQuiz";
import BarInfo from "../../components/BarInfo";

export default function Learn({ match }) {
  const { game, setGameState } = useContext(GameContext);
  const continent = match.params.continent;
  const thisMap = match.params.learn;
  const data = learnDatas[0][continent][thisMap];
  const Map = data.map;
  const [show, setShow] = useState(true);
  const [learn, setLearn] = useState(undefined);
  const [prevLearn, setPrevLearn] = useState(undefined);
  const [learnData, setLearnData] = useState({});
  const [countries, setCountries] = useState([]);
  const [finish, setFinish] = useState(false);

  var imgPath = null;
  try {
    imgPath = require(`../../assets/images/flags/continents/${continent}/Countries/${learn}.png`);
  } catch (e) {
    imgPath = null;
  }

  const [mapData, setMapData] = useState(
    learnDatas[0][continent][thisMap]["countries"]
  );

  const manageClass = (element, type, classname, add = true) => {
    let newData = Object.assign({}, mapData);
    if (add && !newData[0][element].class[type].includes(classname)) {
      newData[0][element].class[type].push(classname);
    } else if (!add && newData[0][element].class[type].includes(classname)) {
      const newClasses = newData[0][element].class[type].filter(
        (c) => c !== classname
      );
      newData[0][element].class[type] = newClasses;
    }
    setMapData(newData);
  };

  useEffect(() => {
    if (learn) {
      manageClass(learn, "learn", "selected");
      if (prevLearn) {
        manageClass(prevLearn, "learn", "selected", false);
      }
      setPrevLearn(learn);
    }
  }, [learn]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setGameState(true);
    return () => {
      let newState = Object.assign({}, mapData);
      for (let [key, _] of Object.entries(mapData[0])) {
        newState[0][key].class = "country";
      }
      window.location.reload();
      setMapData(newState);
      setGameState(false);
    };
  }, []);

  function handleClick(event) {
    const selected = event.currentTarget.id;
    setLearn(selected);
    getCountryData(selected);
  }

  function handleClickLink(event) {
    const selected = event.target.id;
    setLearn(selected);
    getCountryData(selected);
  }

  function getCountryData(selected) {
    setLearnData({
      name: selected,
      capital: mapData[0][selected].capital,
      population: mapData[0][selected].population,
      language: mapData[0][selected].language,
      land: mapData[0][selected].land,
      animal: mapData[0][selected].animal,
      flag: mapData[0][selected].flag,
    });
  }

  // function getFontSize(word) {
  //   const limit = 12;
  //   let size;
  //   if (word.length >= limit) {
  //     size = "40px";
  //   } else {
  //     size = "54px";
  //   }
  //   return size;
  // }

  const handleStart = () => {
    setShow(false);
  };

  const modalContent = (
    <div className="game-modal-info">
      <h2>
        • Take some time to study the <b>{Object.keys(mapData[0]).length}</b>{" "}
        Countries found in <b>{learnDatas[0][continent][thisMap].title}</b>!
      </h2>
      <br />
      <h2>• When you're ready, simply scroll down for a quiz!</h2>
    </div>
  );

  const handleClose = (e) => {
    if (e.target.tagName === "svg") {
      setLearn(undefined);
      if (prevLearn) {
        manageClass(prevLearn, "learn", "selected", false);
        setPrevLearn(undefined);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Learning {learnDatas[0][continent][thisMap].title}</title>
      </Helmet>
      <div className="learn-page">
        <div className="learn-title">
          <h2>{data.title}</h2>
          <div
            className="learn-links"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Link to={`/learn/${continent}/northern-europe`}>
              Northern europe
            </Link>
            <Link to={`/learn/${continent}/${thisMap}`}>Southern europe</Link>
            <Link to={`/learn/${continent}/western-europe`}>
              Western europe
            </Link>
            <Link to={`/learn/${continent}/eastern-europe`}>
              Eastern europe
            </Link>
          </div>
        </div>
        <hr />
        <div className="learn-page-container">
          <GameModal
            show={show}
            title={<h1>Learning {learnDatas[0][continent][thisMap].title}</h1>}
            content={modalContent}
            gameStart={handleStart}
          />
          <div
            className="learn-map-container"
            id="mapContainer"
            onClick={handleClose}
          >
            <Map
              handleClick={handleClick}
              data={mapData[0]}
              selected={learn}
              type="learn"
            />
          </div>
          <BarInfo
            one={
              learnData
                ? {
                    place: learnData.name,
                    img: learnData.flag,
                    sub: learnData.capital,
                  }
                : null
            }
            two={learnData ? learnData : null}
            three={countries}
            handleClick={handleClickLink}
          />
        </div>
        <button
          onClick={() =>
            window.scrollTo({
              top: 1200,
              left: 0,
              behavior: "smooth",
            })
          }
          className="learn-scroll"
        >
          Quiz Below!
        </button>
      </div>
      <LearnQuiz
        map={Map}
        data={mapData[0]}
        continent={continent}
        finish={finish}
        setFinish={setFinish}
        setCountries={setCountries}
      />
    </>
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

{
  /* <div id="learning-info-name">
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
            </div> */
}
