import React from "react";
import GameButton from "../GameButton";
import ReactTooltip from "react-tooltip";

import { ReactComponent as SkipBtn } from "../../../assets/images/skip.svg";
import { ReactComponent as ShowBtn } from "../../../assets/images/show.svg";

export default function HelpBtns(props) {
  return (
    <div className="help-btns">
      <SkipBtn className="game-info-btn" data-tip="Skip (for now)" onClick={props.handleSkip} />
      <ShowBtn className="game-info-btn" data-tip="Show the Answer" onClick={props.handleShowMe} />
      {/* <ReactTooltip place="bottom" type="light" effect="float" /> */}
      {/* <GameButton
        name="Skip"
        id="game-skipButton"
        colour="#88C955"
        handleClick={props.handleSkip}
      />
      <GameButton
        name="Show Me"
        id="game-showMeButton"
        colour="#6297E5"
        handleClick={props.handleShowMe}
      /> */}
    </div>
  );
}
