import React, { useContext } from "react";
//import { Link, animateScroll as Scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import { GameContext } from "../../components/gameContext";
import { ModeContext } from "../../components/modeContext";
import BackgroundImg from "../../assets/images/stars.jpg";
import "./home.css";

import HomeBtns from "./HomeBtns";
import ScrollPage from "./ScrollPage";

const Home = () => {
  const { game, setGameState } = useContext(GameContext);
  const { mode, setModeState } = useContext(ModeContext);

  const handleClickQuiz = () => {
    setModeState("quiz");
    scroll(1100);
  };

  const handleClickLearn = () => {
    setModeState("learn");
    scroll(1100);
  };

  function scroll(position) {
    window.scrollTo({
      top: position,
      left: 0,
    });
  }

  return (
    <>
      <Helmet>
        <title>Interactive Geography Quiz - GeoQuiz</title>
      </Helmet>
      <div className="home-welcome-page">
        {/* <img src={BackgroundImg} id="home-bg" /> */}
        <img
          alt="wave-svg"
          className="top-wave wave"
          src={require("../../assets/images/home-wave.svg")}
        />
        <div className="home-content-container">
          {/* <img
            id="moon-img"
            src={require("../../assets/images/home-moon.svg")}
          /> */}
          <HomeBtns quiz={handleClickQuiz} learn={handleClickLearn} />
          <img
            alt="world-img"
            src={require("../../assets/images/home-bg-extra.svg")}
            id="home-img"
            // data-aos="zoom-in"
          />
        </div>
      </div>
      <img
        id="scroll-wave"
        className="wave"
        alt=""
        src={require("../../assets/images/home-wave-split.svg")}
      />
      <p id="quizzes-label">
        Geography Quizzes <span style={{ fontSize: "40px" }}>&darr;</span>
      </p>
      <ScrollPage mode={mode} setMode={setModeState} scroll={scroll} />
      <img
        id="scroll-wave2"
        className="wave"
        alt=""
        src={require("../../assets/images/home-wave-split2.svg")}
      />
      <footer>&copy; Copyright 2020 Geoquiz.app</footer>
    </>
  );
};

export default Home;
