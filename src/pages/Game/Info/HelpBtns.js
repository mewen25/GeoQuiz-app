import React from "react";
import GameButton from "../GameButton";

export default function HelpBtns(props) {
  return (
    <div className="help-btns">
      <GameButton
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
      />
    </div>
  );
}
