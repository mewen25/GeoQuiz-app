import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const SelectContinent = props => {
  const history = useHistory();
  let btnPath = `/game/${props.linkTitle}`;
  if (props.disabled == true) {
    btnPath = "/";
  }
  const [hover, setHover] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(props.styles.bg);

  const selectedStyle = {
    backgroundColor: props.styles.select
  };

  const handleHover = () => {
    setHover(true);
    setButtonStyle(props.styles.hover);
  };

  const handleHoverEnd = () => {
    setHover(false);
    setButtonStyle(props.styles.bg);
  };

  return (
    <div
      id={props.linkTitle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <button
        className="selectable"
        onClick={props.handleClick}
        id={props.linkTitle}
        style={
          props.selected === props.linkTitle
            ? selectedStyle
            : hover
            ? { backgroundColor: props.styles.hover }
            : { backgroundColor: props.styles.btn }
        }
        // style={
        //   props.selected === props.linkTitle
        //     ? selectedStyle
        //     : { backgroundColor: buttonStyle }
        // }
        // style={
        //   props.selected === props.linkTitle
        //     ? { backgroundColor: selectedStyle }
        //     : hover
        //     ? { backgroundColor: props.styles.hover }
        //     : { backgroundColor: props.styles.bg }
        // }
      >
        {props.title}
      </button>
    </div>
  );
};
// onClick={() => history.push(btnPath)}
export default SelectContinent;
