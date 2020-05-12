import React from "react";

import LearnQuizModesButton from "./LearnQuizModesButton";

function LearnQuizModes(props) {
  //const [selected, setSelected] = useState("Countries");

  const handleSelected = (mode) => {
    if (mode !== props.mode) {
      props.setMode(mode);
    }
  };

  return (
    <div className="learn-quiz-modes-container">
      <LearnQuizModesButton
        selected={props.mode}
        handleSelect={handleSelected}
        mode="Countries"
        colour="#FFA2A2"
      />
      <LearnQuizModesButton
        selected={props.mode}
        handleSelect={handleSelected}
        mode="Flags"
        colour="#A6EFFF"
      />
      <LearnQuizModesButton
        selected={props.mode}
        handleSelect={handleSelected}
        mode="Capitals"
        colour="#A4FFA3"
      />
    </div>
  );
}

export default LearnQuizModes;
