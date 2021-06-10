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
            <Link to="/quiz/africa/countries" className="header-quiz">
              Africa
            </Link>
            <Link to="/quiz/asia/countries" className="header-quiz">
              Asia
            </Link>
            <Link to="/quiz/europe/countries" className="header-quiz">
              Europe
            </Link>
            <Link to="/quiz/north-america/countries" className="header-quiz">
              North America
            </Link>
            <Link to="/quiz/oceania/countries" className="header-quiz">
              Oceania
            </Link>
            <Link to="/quiz/south-america/countries" className="header-quiz">
              South America
            </Link>
            {/* <div>LEARNING</div> */}
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
