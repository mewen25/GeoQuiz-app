import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//import data from "../../data/mapData/Continents/Europe/Europe";
import "./learn.css";
import { GameContext } from "../../components/Utils/gameContext";
import GameModal from "../Game/GameModal";
import learnDatas from "../../data/gameData/learningData";
import PageLinks from "./PageLinks";
//import MapQuiz from "../../data/mapData/Continents/Europe/Learn/LearnNorthernEuropeQuiz";
import LearnContents from "./LearnContents";
import LearnSelected from "./LearnSelected";
import LearnQuiz from "./LearnQuiz";
import LearnTestModal from "./LearnTestModal";
import BarInfo from "../../components/Utils/BarInfo";

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
  const [hasClicked, setHasClicked] = useState(false);
  const [clickedPlaces, setClickedPlaces] = useState([]);
  const [currentMap, setCurrentMap] = useState(thisMap);
  const [isDoingTest, setIsDoingTest] = useState(false);
  const [LearnCountry, setLearnCountry] = useState(null);

  const history = useHistory();

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
    //window.location.reload();
    // setMapData(
    //   learnDatas[0][match.params.continent][match.params.learn]["countries"]
    // );
  }, []);

  useEffect(() => {
    if (learn) {
      if (isDoingTest) {
        setIsDoingTest(false);
      }
      manageClass(learn, "learn", "selected");
      manageClass(learn, "learn", "country-searched");
      if (!clickedPlaces.includes(learn)) {
        setClickedPlaces((prevData) => [...prevData, learn]);
      }
      //animate("#barInfo-one-flex1", ["zoomIn", "faster"]);
      if (prevLearn) {
        manageClass(prevLearn, "learn", "selected", false);
      }
      setPrevLearn(learn);

      setLearnCountry(getCountrySvg());
    }
  }, [learn]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    if (thisMap !== currentMap) {
      history.go();
    }
    //window.location.reload();
    setGameState(true);
    return () => {
      let newState = Object.assign({}, mapData);
      for (let [key, _] of Object.entries(mapData[0])) {
        newState[0][key].class["quiz"] = ["country"];
        newState[0][key].class["learn"] = ["country"];
      }
      //window.location.reload();
      setMapData(newState);
      setGameState(false);
    };
  }, [thisMap]);

  function handleClick(event) {
    const selected = event.currentTarget.id;
    setLearn(selected);
    getCountryData(selected);
    setHasClicked(true);
  }

  function handleClickLink(event) {
    const selected = event.target.id;
    setIsDoingTest(false);
    setLearn(selected);
    getCountryData(selected);
  }

  function getCountryData(selected) {
    if (selected) {
      setLearnData({
        name: selected,
        capital: mapData[0][selected].capital,
        population: mapData[0][selected].population,
        language: mapData[0][selected].language,
        land: mapData[0][selected].land,
        animal: mapData[0][selected].animal,
        flag: mapData[0][selected].flag,
        altName: mapData[0][selected].altName
          ? mapData[0][selected].altName
          : null,
      });
    }
  }

  function animate(name, animation, custom = false) {
    let node;
    if (!custom) {
      node = document.querySelector(name);
      //const classes = animation.split(" ");
      node.classList.add("animated", animation);
    } else {
      node = document.querySelector(`#${name}`);
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
      setIsDoingTest(false);
    }
  };

  const getCountrySvg = () => {
    const map = document.getElementById("learnMap");
    return Array.from(map.querySelectorAll("g"))
      .filter((c) => c.id === learn)[0]
      .querySelector("path");
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
            {/* <PageLinks history={history} continent={continent} /> */}
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
        <div className="learn-page-container" onClick={handleClose}>
          <div className="learn-page-infos">
            <LearnContents
              learn={learn}
              countries={countries}
              handleClick={handleClickLink}
              searched={clickedPlaces}
            />
            {learn ? (
              <LearnSelected
                isTest={isDoingTest}
                setTest={setIsDoingTest}
                data={
                  learnData
                    ? {
                        place: learnData.name,
                        img: learnData.flag,
                        capital: learnData.capital,
                        altNames: learnData.altName,
                      }
                    : null
                }
              />
            ) : !hasClicked ? (
              <div
                className="learn-page-infos-placeholder"
                style={{ marginTop: "150px" }}
              >
                <h1>Select a Country to get Learning!</h1>
              </div>
            ) : null}
          </div>
          <div className="learn-map-container">
            {!isDoingTest && mapData[0] ? (
              <Map
                handleClick={handleClick}
                data={mapData[0]}
                selected={learn}
                type="learn"
                prevSelected={clickedPlaces}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1.5"
                clipRule="evenodd"
                viewBox="0 0 850 700"
                id="learnMap1"
                onClick={handleClose}
                style={{ display: "inline-block" }}
              >
                <path
                  fill={LearnCountry["attributes"]["fill"].value}
                  fillRule="nonzero"
                  d={LearnCountry["attributes"]["d"].value}
                  style={{ width: "100%", height: "100%" }}
                ></path>
              </svg>
            )}
          </div>
        </div>
        <div className="learn-page-key">
          <div className="learn-page-key-hints">
            <img src={require("../../assets/images/hint.svg")} alt="hint-img" />
            <p>Hints/Memorisation tips</p>
          </div>
          <div className="learn-page-test-info">
            <div className="learn-page-test-info-topics">
              <p>Country</p>
              <p>Capital</p>
              <p>Flag</p>
            </div>
            <p>Information tested below</p>
          </div>
        </div>
      </div>
      <LearnQuiz
        map={Map}
        data={mapData[0]}
        continent={continent}
        finish={finish}
        setFinish={setFinish}
        setCountries={setCountries}
        anim={animate}
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
