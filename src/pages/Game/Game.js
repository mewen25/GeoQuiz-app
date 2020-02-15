import React, { useState, useEffect, useRef } from "react";
import GameModal from "./GameModal";
import FinishModal from "./FinishModal";
import Header from "../../components/Header";
import gameData from "../../data/config/continentData";
import "./game.css";
import "./modal.css";

import GameMap from "./GameMap";

const Game = ({ match }) => {
  const [show, setShow] = useState(true);
  const [continent, setContinent] = useState(match.params.continent);
  const [gameValues, setGameValues] = useState({
    continent: undefined,
    mode: undefined,
    time: "02:20",
    findAmount: undefined,
    countriesData: undefined,
    map: undefined
  });
  const [finish, setFinish] = useState(false);
  const [gameResults, setGameResults] = useState({});

  const gameSetup = (newMode = "countries") => {
    const data = gameData[continent];
    setGameValues({
      continent: data.continent,
      continentId: data.continentId,
      mode: data.mode[newMode].title,
      time: data.mode[newMode].time,
      findAmount: data.mode[newMode].findAmount,
      map: data.mode[newMode].map,
      data: data.mode[newMode].data
    });
  };

  const handleStart = () => {
    setShow(false);
  };

  useEffect(() => {
    gameSetup();

    return function cleanup() {
      //window.location.reload();
    };
  }, []);

  return (
    <div className="game">
      {gameValues.map ? (
        <div className="game-map">
          <GameMap
            data={gameValues}
            show={show}
            setFinish={setFinish}
            setResults={setGameResults}
          />
        </div>
      ) : null}
      <GameModal
        show={show}
        continent={gameValues.continent}
        mode={gameValues.mode}
        time={gameValues.time}
        findAmount={gameValues.findAmount}
        changeMode={gameSetup}
        gameStart={handleStart}
      />
      {finish == true ? (
        <FinishModal finish={finish} info={gameResults} />
      ) : (
        console.log(finish)
      )}
    </div>
  );
};

export default Game;
