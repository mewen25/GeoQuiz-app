import React, { useState } from "react";

import SelectContinent from "../../components/SelectContinent";
import NavOptions from "./NavOptions";
import ToggleSwitch from "../../components/ToggleSwitch";
import QuizLink from "./QuizLink";
import "./scrollpage.css";

export default function ScrollPage(props) {
  const [pageSelect, setPageSelect] = useState(undefined);

  const quizLinks = [
    <QuizLink />,
    <QuizLink />,
    <QuizLink />,
    <QuizLink />,
    <QuizLink />,
    <QuizLink />,
  ];

  return (
    <div className="scrollpage">
      <div className="continent-quiz-container">{quizLinks}</div>
    </div>
  );
}
