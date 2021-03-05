import React, { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import OtherLink from "../Game/OtherLink/OtherLink";
import ProgressBar from "../Utils/Display/ProgressBar";
import QuizButtons from "../Quiz/Infos/QuizButtons";
import { ReactComponent as Exit } from "../../assets/images/game/exit.svg";

import styles from "./quiz.module.scss";

export default function QuizHeader({
  history,
  gameScore,
  total,
  show,
  handles = {},
  place,
  setGuessTime,
}) {
  const { score, marks, points } = gameScore;
  const { time, start, stop } = useTimer();
  const [placeStart, setPlaceStart] = useState(null);

  useEffect(() => {
    if (!show) start();
  }, [show]);

  useEffect(() => {
    setGuessTime(time - placeStart ?? 0);
    setPlaceStart(time);
  }, [place]);

  return (
    <div className={styles.quizHeader}>
      <div className={styles.quizHeaderExit}>
        <Exit className="exit" onClick={() => history.push("/")} />
      </div>
      <div className={styles.quizHeaderScore}>
        <p>SCORE</p>
        <div>
          <p>{score}</p>
        </div>
      </div>
      <div className={styles.quizHeaderBar}>
        <ProgressBar
          percent={marks === 1 ? 0 : (marks / (total + 1)) * 100}
          streak={1}
          colour="#5DBCFB"
        />
      </div>
      <div className={styles.quizHeaderTime}>
        <p>{new Date(time * 1000).toISOString().substr(15, 4)}</p>
      </div>
      <div className={styles.quizHeaderButtons}>
        <QuizButtons {...handles} />
      </div>
    </div>
  );
}
