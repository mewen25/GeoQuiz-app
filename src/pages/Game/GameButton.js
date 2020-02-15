import React from "react";

const GameButton = props => {
  return (
    <button
      id={props.id}
      className="game-button"
      style={{ backgroundColor: props.colour }}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default GameButton;
