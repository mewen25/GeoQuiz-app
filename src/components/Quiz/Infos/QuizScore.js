import React from 'react';

export default ({ score=0, marks=1, total, time="0:00", colour="#fff" }) => {
    const infoStyle = {
        backgroundColor: colour[0],
        color: colour[1]
    };
    return (
        <div className="quiz-info-scores">
            <p style={infoStyle} className="marks info-boxed">{Math.min(marks, total)} / {total}</p>
            <p style={infoStyle} className="time info-boxed">{time}</p>
            <span className="score">
                <p>Score</p>
                <p style={infoStyle} className="info-boxed">{score}</p>
            </span>
        </div>
    )
}