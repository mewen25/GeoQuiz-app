import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const OptionButtons = props => {
  const selectedStyle = {
    backgroundColor: "#457434 !important",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.5) !important"
  };

  const optionButtons = props.btns.map(item => (
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
