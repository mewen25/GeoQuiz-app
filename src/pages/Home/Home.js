import React, { useState, useEffect, useContext } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import { Helmet } from "react-helmet";
// import { ReactComponent as TitleImg } from "../../assets/images/home-img.svg";
// import { ReactComponent as TitleImgSm } from "../../assets/images/home-img-sm.svg";
import { GameContext } from "../../components/gameContext";
import { ModeContext } from "../../components/modeContext";
import "./home.css";

import HomeBtns from "./HomeBtns";
import ScrollPage from "./ScrollPage";

const Home = () => {
  const { game, setGameState } = useContext(GameContext);
  const { mode, setModeState } = useContext(ModeContext);
  const [gameMode, setGameMode] = useState("quiz");

  const handleClickQuiz = () => {
    setGameMode("quiz");
    setModeState("quiz");
    scroll(900);
  };

  const handleClickLearn = () => {
    setGameMode("learn");
    setModeState("learn");
    scroll(900);
  };

  function scroll(position) {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      <div id="home-page">
        <Helmet>
          <title>Interactive Geography Quiz - GeoQuiz</title>
        </Helmet>
        <img
          alt="stars-img"
          src={require("../../assets/images/home-stars.svg")}
          id="home-stars"
          data-aos="zoom-in"
        />
        <img
          alt="world-img"
          src={require("../../assets/images/home-world.svg")}
          id="home-img"
          data-aos="zoom-in"
        />
        <div id="home-tag">
          <h2>Do You Know Your Countries of the World?</h2>
        </div>
        <HomeBtns quiz={handleClickQuiz} learn={handleClickLearn} />
      </div>
      <ScrollPage mode={mode} setMode={setModeState} scroll={scroll} />
      <footer>&copy; Copyright 2020 Geoquiz.app</footer>
    </>
  );
};

export default Home;
