import React, { useEffect } from 'react';
import ProgressBar from "../../Utils/Display/ProgressBar";
import { useTimer } from "use-timer";

export default ({ score=0, marks=1, total, show, colour="#fff" }) => {
    const { time, start, stop  } = useTimer();
    const infoStyle = {
        backgroundColor: colour[0],
        color: colour[1]
    };

    useEffect(() => {
      if(!show) start();
    }, [show])

    return (
        <div className="quiz-info-scores">
            <ProgressBar colour="#5DBCFB" percent={marks === 1 ? 0 : (marks/(total+1))*100} />
            <div className="quiz-info-scores-text">
                <p>Score<span style={{marginLeft: "10px", minWidth: "100px", textAlign: "center"}}>{score}</span></p>
                <p>{new Date(time * 1000).toISOString().substr(14, 5)}</p>
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