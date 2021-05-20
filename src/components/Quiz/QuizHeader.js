import React, { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import OtherLink from "../Game/OtherLink/OtherLink";
import ProgressBar from "../Utils/Display/ProgressBar";
import QuizButtons from "../Quiz/Infos/QuizButtons";
import { ReactComponent as Exit } from "../../assets/images/game/exit.svg";
import { ReactComponent as Refresh } from "../../assets/images/game/refresh.svg";

import styles from "./quiz.module.scss";

export default function QuizHeader({
  history,
  gameScore,
  total,
  show,
  setShow,
  handles = {},
  place,
  setGuessTime,
  quizType,
  listCount,
  currentAttempts,
  finished,
  isMuted,
}) {
  const { score, marks, points, misses } = gameScore;
  const { time, start, pause } = useTimer();
  const [placeStart, setPlaceStart] = useState(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!show) start();
    else {
      pause();
    }
  }, [show]);

  useEffect(() => {
    if (finished) {
      pause();
      handles.setResults((prev) => {
        return {
          ...prev,
          time: `${new Date(time * 1000).toISOString().substr(15, 4)}`,
        };
      });
    }
  }, [finished]);

  useEffect(() => {
    setGuessTime(time - placeStart ?? 0);
    setPlaceStart(time);
    if (!show && marks > 1) {
      setStreak((prev) => prev + 1);
    }
  }, [place]);

  useEffect(() => {
    setStreak(0);
  }, [misses]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.quizHeader}>
        <div className={styles.quizHeaderExit}>
          <Exit onClick={() => history.push("/quiz")} />
          <Refresh onClick={() => setShow(true)} />
        </div>
        {quizType !== "learn" && (
          <>
            <div className={styles.quizHeaderScore}>
              <p>SCORE</p>
              <div>
                <p>{score}</p>
              </div>
            </div>
            <div className={styles.quizHeaderBar}>
              <ProgressBar
                percent={
                  marks === 1
                    ? 0
                    : ((total + 1 - listCount) / (total + 1)) * 100
                }
                streak={streak > 1 ? streak : null}
                colour="#5DBCFB"
              />
            </div>
            <div className={styles.quizHeaderTime}>
              <p>{new Date(time * 1000).toISOString().substr(15, 4)}</p>
            </div>
            {quizType !== "multipleChoice" && (
              <div className={styles.quizHeaderButtons}>
                <QuizButtons {...handles} isMuted={isMuted} styles={styles} />
              </div>
            )}
          </>
        )}
      </div>
      {quizType !== "learn" && quizType !== "multipleChoice" && (
        <div className={styles.headerFind}>
          <div>
            <span className={styles.headerFindSub}>Find</span>
            {place?.name}
          </div>
          <img src={place.image} alt={place.name} />
        </div>
      )}
    </div>
  );
}
