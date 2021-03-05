import React from "react";
import ShowMeButton from "../../Utils/Button/ShowMeBtn";
import SkipButton from "../../Utils/Button/SkipBtn";
import { ReactComponent as BtnSvg } from "../../../assets/images/game/skipBtn.svg";

export default ({ handleSkip, handleShow }) => {
  return (
    <>
      <button onClick={handleSkip}>Reveal</button>
      <div>
        <BtnSvg />
      </div>
      {/* <ShowMeButton handleClick={handleShow} /> */}
      {/* <SkipButton handleClick={handleSkip} /> */}
    </>
  );
};
