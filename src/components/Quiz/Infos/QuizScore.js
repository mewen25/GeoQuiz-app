import React from 'react';
import ProgressBar from "../../Utils/Display/ProgressBar";

export default ({ score=0, marks=1, total, time="0:00", colour="#fff" }) => {
    const infoStyle = {
        backgroundColor: colour[0],
        color: colour[1]
    };
    return (
        <div className="quiz-info-scores">
            <ProgressBar colour="#5DBCFB" percent={marks === 1 ? 0 : (marks/(total+1))*100} />
            <div className="quiz-info-scores-text">
                <p>Score <span>{score}</span></p>
                <p>{time}</p>
            </div>
            {/* <p style={infoStyle} className="marks info-boxed">{Math.min(marks, total)} / {total}</p>
            <p style={infoStyle} className="time info-boxed">{time}</p>
            <span className="score">
                <p>Score</p>
                <p style={infoStyle} className="info-boxed">{score}</p>
            </span> */}
        </div>
    )
}