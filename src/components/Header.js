import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../components/gameContext";

const Header = (match) => {
  const { game } = useContext(GameContext);
  return (
    <>
      <div className="header">
        <Link to="/" className="header-logo">
          <img src={require("../assets/images/header-logo.png")} />
        </Link>
        <div className="header-nav">
          <p>Home</p>
          <p>Quiz</p>
          <p>Learn</p>
          <p>About</p>
        </div>
      </div>
    </>
  );
};

export default Header;
