import React from "react";
import { Link } from "react-router-dom";

const Header = match => {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        {`<GeoQuiz>`}
      </Link>
    </div>
  );
};

export default Header;
