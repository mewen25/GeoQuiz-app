import React from "react";
import { Button } from "react-bootstrap";

const ShowMeBtn = props => {
  return (
    <Button
      variant="success"
      size="lg"
      block
      name="showMe"
      data-toggle="tooltip"
      data-placement="bottom"
      title="Show Me"
      onClick={props.handleShowMe}
      id={props.id}
    >
      Show Me
    </Button>
  );
};

export default ShowMeBtn;
