import React from 'react';
import ShowMeButton from "../../Utils/Button/ShowMeBtn";
import SkipButton from "../../Utils/Button/SkipBtn";

export default ({ handleSkip, handleShow }) => {
    return (
        <div className="quiz-helpers">
            <ShowMeButton handleClick={handleShow} />
            <SkipButton handleClick={handleSkip} />
        </div>
    )
}