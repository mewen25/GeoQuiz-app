import React, { useEffect } from "react";
import { useTimer } from "use-timer";

import HelpBtns from "./HelpBtns";

export default function InfoScore(props) {
  const { time, start, pause, reset } = useTimer({
    initialTime: 0,
    timerType: "INCREMENTAL"
  });

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    //props.finalTime(time);
    if (props.correct >= props.total) {
      props.finalTime(time);
      pause();
    }
  }, [time]);

  return (
    <div className="info-score">
      <div id="info-score-and-time">
        <p id="game-score">{`${props.correct}/${props.total}`}</p>
        <p id="game-time">
          {new Date(time * 1000).toISOString().substr(14, 5)}
        </p>
      </div>
      <div id="info-points">
        <p id="game-points">Score: {props.points}</p>
      </div>
    </div>
  );
}
