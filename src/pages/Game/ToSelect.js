import React, { useState, useEffect } from "react";
import { useTimer } from "use-timer";

const ToSelect = props => {
  const { time, start, pause, reset } = useTimer({
    initialTime: 0,
    timerType: "INCREMENTAL"
  });

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    props.finalTime(time);
    if (props.correct >= props.data) {
      pause();
    }
  }, [time]);

  return (
    <>
      {props.show == false && props.correct < props.data ? (
        <div className="game-info-container">
          <div className="game-info-place">
            <h2 id="game-place">{props.search.name}</h2>
            {props.mode != "Capitals" && props.mode != "US State Capitals" ? (
              <img
                alt={`${props.search.name}-flag`}
                src={require(`../../assets/images/flags/continents/${props.continent}/${props.mode}/${props.search.name}.png`)}
              />
            ) : null}
          </div>
          <div className="game-info-misc-container">
            <div className="game-score-and-time game-misc-info">
              <p id="game-marks">{`${props.correct}/${props.data}`}</p>
              <p id="game-time">
                {new Date(time * 1000).toISOString().substr(14, 5)}
              </p>
            </div>
            <div className="game-points-score game-misc-info">
              <p>Score: {props.score}</p>
            </div>
          </div>
          <div className="game-info-guess">
            <h2>{!props.answers.includes(props.guess) ? props.guess : null}</h2>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ToSelect;
