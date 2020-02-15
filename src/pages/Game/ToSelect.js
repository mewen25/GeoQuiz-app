import React, { useState, useEffect } from "react";

const ToSelect = props => {
  useEffect(() => {
    console.log("got new score", props.score);
  }, [props.score]);

  return (
    <>
      {props.show == false ? (
        <div className="game-info-container">
          <div className="game-info-place">
            <h2 id="game-place">{props.search.name}</h2>
            {props.mode != "Capitals" ? (
              <img
                alt={`${props.search.name}-flag`}
                src={require(`../../assets/images/flags/continents/${props.continent}/${props.mode}/${props.search.name}.png`)}
              />
            ) : null}
          </div>
          <div className="game-info-misc-container">
            <div className="game-score-and-time game-misc-info">
              <p id="game-marks">
                {props.correct < props.data
                  ? `${props.correct}/${props.data}`
                  : "Finished!"}
              </p>
              <p id="game-time">2:00</p>
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
