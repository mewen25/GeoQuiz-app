import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import SelectContinent from "../../components/SelectContinent";
import NavOptions from "./NavOptions";
import ToggleSwitch from "../../components/ToggleSwitch";
import QuizLink from "./QuizLink";
import navData from "../../data/gameData/gameSelect";
import "./scrollpage.css";

export default function ScrollPage(props) {
  const [pageSelect, setPageSelect] = useState(undefined);

  const quizLinks = Object.keys(navData[0]).map(c => (
    <QuizLink 
      name={navData[0][c]["name"]}
      quizzes={navData[0][c]["quiz"]["links"].map(l => <Link to={`/quiz/${c}/${l.link}`}><p style={{color: "#285979"}}>{`${l.name} of ${navData[0][c]["name"]}`}</p></Link>)}
      learns={navData[0][c]["learn"]["links"].map(l => <Link to={`/learn/${c}/${l.link}`}><p style={{color: "#FF720C"}}>{`${l.name} of ${navData[0][c]["name"]}`}</p></Link>)}
      img={navData[0][c]["img"]}
      continentLink={c}
    />
  ));

  return (
    <div className="scrollpage">
      <div id="scrollpage-title-container">
        <img id="scrollpage-title-img" alt="plane" src={require('../../assets/images/plane.svg')} />
        <h1 id="scrollpage-title">Continents</h1>
      </div>
      <div className="continent-quiz-container">{quizLinks}</div>
    </div>
  );
}
