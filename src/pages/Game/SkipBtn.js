import React from "react";
import { Button } from "react-bootstrap";

const SkipBtn = props => {
  return (
    <>
    <Button
      variant="success"
      size="lg"
      block
      name="Skip"
      title="Skip"
      data-tip="React-tooltip"
      onClick={props.handleSkip}
      id={props.id}
    >
      Skip (for now)
    </Button>
    <ReactTooltip place="bottom" type="light" effect="float" />
  </>
  );
};

export default SkipBtn;
