import React from "react";

const LearnQuizModesButton = ({ mode, colour, handleSelect, selected }) => {
  const defaultStyle = {
    backgroundColor: colour,
    width: "150px",
    height: "55px",
    fontSize: "24px",
  };
  const selectedStyle = {
    backgroundColor: colour,
    width: "200px",
    height: "80px",
    fontSize: "30px",
  };

  return (
    <div
      className="learnQuizModesButton"
      style={selected === mode ? selectedStyle : defaultStyle}
      onClick={() => handleSelect(mode)}
    >
      {mode}
    </div>
  );
};

export default LearnQuizModesButton;
