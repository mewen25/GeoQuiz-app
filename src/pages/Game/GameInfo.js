import React from "react";

import InfoPlace from "./Info/InfoPlace";
import InfoScore from "./Info/InfoScore";
import HelpBtns from "./Info/HelpBtns";
import InfoMisses from "./Info/InfoMisses";

import "./Info/info.css";

export default function GameInfo(props) {
  return (
    <div className="info-container">
      <InfoPlace
        place={props.place}
        mode={props.mode}
        continent={props.continent}
      />
      <InfoScore
        correct={props.correct}
        total={props.total}
        points={props.score}
        time={props.time}
        finalTime={props.setFinish}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <InfoMisses misses={props.misses} />
        <HelpBtns
          handleSkip={props.handleSkip}
          handleShowMe={props.handleShowMe}
        />
      </div>
    </div>
  );
}
