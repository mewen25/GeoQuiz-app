import React from "react";
import { Button } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { ReactComponent as BtnSvg } from "../../../assets/images/game/skipBtn.svg";

const SkipBtn = props => {
  return (
    <div className="circle-btn">
      <BtnSvg />
    </div>
  )
  
  // return (
  //   <>
  //   <Button
  //     variant="success"
  //     size="lg"
  //     block
  //     name="Skip"
  //     title="Skip"
  //     onClick={props.handleSkip}
  //     id={props.id}
  //   >
  //     Skip
  //   </Button>
  //   <ReactTooltip place="bottom" type="light" effect="float" />
  // </>
  // );
};

export default SkipBtn;
