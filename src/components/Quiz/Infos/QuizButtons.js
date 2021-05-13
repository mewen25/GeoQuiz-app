import React from "react";
import ShowMeButton from "../../Utils/Button/ShowMeBtn";
import SkipButton from "../../Utils/Button/SkipBtn";
import { ReactComponent as BtnSvg } from "../../../assets/images/game/skipBtn.svg";
import { ReactComponent as Mute } from "../../../assets/images/game/mute.svg";
import { ReactComponent as Muted } from "../../../assets/images/game/muted.svg";
export default ({
  handleSkip,
  handleShow,
  setMuted,
  styles,
  isMuted = false,
}) => {
  return (
    <>
      <button onClick={handleShow}>Reveal</button>
      <div>
        <BtnSvg />
      </div>
      <div
        className={styles.muteIcon}
        data-isMuted={isMuted}
        onClick={() => setMuted((prev) => !prev)}
      >
        {!isMuted ? <Mute /> : <Muted />}
      </div>
      {/* <ShowMeButton handleClick={handleShow} /> */}
      {/* <SkipButton handleClick={handleSkip} /> */}
    </>
  );
};
