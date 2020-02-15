import React from "react";
import { Button } from "react-bootstrap";

const SkipBtn = props => {
  return (
    <Button
      variant="success"
      size="lg"
      block
      name="Skip"
      onClick={props.handleSkip}
      id={props.id}
    >
      Skip (for now)
    </Button>
  );
};

export default SkipBtn;
