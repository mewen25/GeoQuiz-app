import React from 'react';
import ShowMeButton from "../../Utils/Button/ShowMeBtn";
import SkipButton from "../../Utils/Button/SkipBtn";

export default ({ handleSkip, handleShow }) => {
    return (
        <div className="quiz-helpers">
            <SkipButton handleClick={handleSkip} />
            <ShowMeButton handleClick={handleShow} />
        </div>
    )
}