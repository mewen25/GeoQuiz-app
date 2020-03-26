import React, { useState, useEffect, useContext } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import { ReactComponent as TitleImg } from "../../assets/images/home-img.svg";
import { ReactComponent as TitleImgSm } from "../../assets/images/home-img-sm.svg";
import { GameContext } from "../../components/gameContext";
import { ModeContext } from "../../components/modeContext";
import "./home.css";

import SelectContinent from "../../components/SelectContinent";
import HomeHeader from "./HomeHeader";
import HomeBtns from "./HomeBtns";
import ScrollPage from "./ScrollPage";

const Home = () => {
  const { game, setGameState } = useContext(GameContext);
  const { mode, setModeState } = useContext(ModeContext);
  const [gameMode, setGameMode] = useState("quiz");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleWindowResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   setGameState(false);
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  const handleClickQuiz = () => {
    setGameMode("quiz");
    setModeState("quiz");
    scroll();
  };

  const handleClickLearn = () => {
    setGameMode("learn");
    setModeState("learn");
    scroll();
  };

  function scroll() {
    window.scrollTo({
      top: 950,
      left: 0,
      behavior: "smooth"
    });
  }

  //const HomeImg = windowWidth >= 650 ? TitleImg : TitleImgSm;
  {
    /* <HomeHeader /> */
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
      <ScrollPage mode={mode} setMode={setModeState} />
      <footer>&copy; Copyright 2020 Geoquiz.app</footer>
    </>
  );
};

export default Home;
