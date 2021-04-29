import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "./gameContext";

const Header = (match) => {
  const { game, header } = useContext(GameContext);
  return (
    <>
      {header && (
        <div className="header">
          <span>
            <Link to="/" className="header-logo">
              <img src={require("../../assets/images/logo.svg")} />
            </Link>
          </span>
          <span className="header-links-container">
            <Link to="/quiz" className="header-quiz">
              QUIZZES
            </Link>
            {/* <div>LEARNING</div> */}
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
