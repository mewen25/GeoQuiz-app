import React from "react";
import { useHistory } from "react-router-dom";

import data from "../../data/gameData/gameSelect";
import QuizLink from "./QuizLink";

export default function Contents({ match }) {
  const history = useHistory();
  console.log(match);
  let { contents } = match.params;
  contents = contents[0].toUpperCase()+contents.slice(1)
  if (contents !== "Quiz" && contents !== "Learn") history.push("/");

  const links = Object.values(data[0]).map(l => {
      console.log(l);
      return [...l?.quiz?.links, ...l?.learn?.links]
  });
  console.log(links);

  return (
    <div className="contents-page">
      <div className="contents-title">
        <h2>{contents}</h2>
        <p>Ready to take on some Quizzes?</p>
      </div>
      <div className="contents-filter">
          <div className="contents-filter-btn">Countries</div>
          <div className="contents-filter-btn">Capitals</div>
          <div className="contents-filter-btn">States</div>
      </div>
      <div className="contents-items">
          
      </div>
    </div>
  );
}
