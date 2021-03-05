import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/home.module.scss";

import { ReactComponent as WorldSvg } from "../assets/images/home/bg-world.svg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Interactive Geography Quiz - GeoQuiz</title>
      </Helmet>

      <div className={styles.homePage}>
        <div className={styles.homeTop}>
          <div className={styles.homeTopContainer}>
            <HomeButtons />
            <WorldSvg className={styles.worldSvg} />
          </div>
        </div>
      </div>
    </>
  );
}

function ScrollPage() {
  return (
    <div className={styles.scrollPage}>
      <p>scroll</p>
    </div>
  );
}

function HomeButtons() {
  const history = useHistory();
  return (
    <div className={styles.homeButtons}>
      <div className={styles.homeButtonsInner}>
        <p className={styles.homeSlogan}>
          Geography made
          <br /> <span style={{ color: "#74c5e6" }}>Fun</span> and{" "}
          <span style={{ color: "#98e575" }}>Easy!</span>
        </p>
        <div className={styles.homeButtonsContainer}>
          <button
            id={styles.quizButton}
            className="selectable"
            onClick={() => history.push("/quiz")}
          >
            Quiz
          </button>
          <button
            id={styles.learnButton}
            className="selectable"
            onClick={() => history.push("/learn")}
          >
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
