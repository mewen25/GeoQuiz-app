import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import GameModal from "./GameModal";
import FinishModal from "./FinishModal";
import Header from "../../components/Header";
import gameData from "../../data/config/continentData";
import { GameContext } from "../../components/gameContext";
import "./game.css";
import "./modal.css";

//import GameMap from "./GameMap";
import GameMap from "./GamePage";

const Game = ({ match }) => {
  const { game, setGameState } = useContext(GameContext);
  const [show, setShow] = useState(true);
  const [continent, setContinent] = useState(match.params.continent);
  const [gameValues, setGameValues] = useState({
    continent: "",
    mode: undefined,
    time: undefined,
    findAmount: undefined,
    countriesData: undefined,
    map: undefined,
  });
  const [finish, setFinish] = useState(false);
  const [gameResults, setGameResults] = useState({});

  const gameSetup = (newMode = match.params.quiz) => {
    const data = gameData[continent];
    setGameValues({
      continent: data.continent,
      continentId: data.continentId,
      mode: data.mode[newMode].title,
      time: data.mode[newMode].time,
      findAmount: data.mode[newMode].findAmount,
      map: data.mode[newMode].map,
      data: data.mode[newMode].data,
      maxPointGain: 250,
    });
  };

  const handleStart = () => {
    setShow(false);
  };

  const modalContent = {
    title: (
      <h2>
        {continent} <b>{gameValues.mode}</b> Quiz!
      </h2>
    ),
    body: (
      <div className="game-modal-info">
        <div className="info-flex">
          <h1>{gameValues.mode}:</h1>
          <h1>{gameValues.findAmount}</h1>
        </div>
        <div className="info-flex">
          <h1>Continent:</h1>
          <h1>{gameValues.continent}</h1>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    gameSetup();
    setGameState(true);
    console.log(gameData[continent]);

    return function cleanup() {
      setGameState(false);
      //window.location.reload();
    };
  }, []);

  return (
    <div className="game">
      <Helmet>
        <title>{gameValues.continent + " - " + gameValues.mode} Quiz</title>
      </Helmet>
      {gameValues.map ? (
        <GameMap
          data={gameValues}
          show={show}
          setFinish={setFinish}
          setResults={setGameResults}
        />
      ) : null}
      <GameModal
        show={show}
        title={modalContent.title}
        content={modalContent.body}
        gameStart={handleStart}
      />
      {finish ? <FinishModal finish={finish} info={gameResults} /> : null}
    </div>
  );
};

export default Game;
