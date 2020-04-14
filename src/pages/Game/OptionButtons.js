import React from "react";
import { Button } from "react-bootstrap";

const OptionButtons = (props) => {
  const optionButtons = props.btns.map((item) => (
    <Button
      name={item}
      variant="success"
      size="lg"
      block
      onClick={props.handleClick}
    >
      {item}
    </Button>
  ));

  return <div className="game-modal-btns">{optionButtons}</div>;
};

export default OptionButtons;
