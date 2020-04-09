import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../components/gameContext";

const Header = match => {
  const { game } = useContext(GameContext);
  return (
    <>
      {game ? (
        <div className="header">
          <Link to="/" className="home-link">
            {`GEOQUIZ`}
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Header;
