import React, { useState } from "react";
import Draggable from "react-draggable";

function LearnQuizButtons({ content }) {
  const [isDragged, setIsDragged] = useState(false);
  const buttonStyle = {
    backgroundColor: "#A4FFA3",
    pointerEvents: isDragged ? "none" : "auto",
    backgroundOpacity: isDragged ? "0.8" : "1",
  };

  const onStart = () => {
    setIsDragged(true);
  };
  const onStop = () => {
    setIsDragged(false);
  };

  return (
    <Draggable bounds=".LQ-gamearea" onStart={onStart} onStop={onStop}>
      <div style={buttonStyle} className="LQ-buttons-btn">
        {content}
      </div>
    </Draggable>
  );
}

export default LearnQuizButtons;
