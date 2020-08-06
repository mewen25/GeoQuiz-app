import React from 'react';

const QuizSideInfo = ({ score, time, marks, total }) => (
    <span className="quiz-side-container">
        <div className="quiz-side-infos">
            <span>
                <div style={{display: "inline-block"}}>
                    <p className="quiz-boxed-text">{`${marks}/${total}`||`1/50`}</p>
                </div>
                <div style={{display: "inline-block"}}>
                    <p className="quiz-boxed-text">{time||`2:00`}</p>
                </div>
            </span>
            <span>
                <p style={{ textAlign: "center", fontSize: "30px", margin: "0", color: "#009CFF" }}>Score</p>
                <div style={{display: "inline-block"}}>
                    <p className="quiz-boxed-text">{score||`10,526`}</p>
                </div>
            </span>
        </div>
    </span>
);

export default QuizSideInfo;