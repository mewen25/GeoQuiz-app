import React from 'react';

import QuizFind from "./QuizFind";
import QuizScore from "./QuizScore";
import QuizButtons from "./QuizButtons";
import "./QuizInfos.css";

const QuizInfos = ({ place, marks, score, total, show, time, colour, handleSkip, handleShow }) => {
    return (
        <div className="quiz-infos-container">
            <QuizFind place={place} colour={colour} handleSkip={handleSkip} handleShow={handleShow} />
            <QuizScore marks={marks} total={total} score={score} time={time} colour={colour} show={show} />
        </div>
    )
    
    // return (
    //     <div className={infoName||"quiz-infos-container"}>
    //         {data && data.type === "top" ? <QuizFind find={data.place} /> :
    //             data && data.type === "side" ? <QuizSideInfo marks={data.marks} total={data.total} score={data.score} time={data.time} /> : null}
    //     </div>
    // )
}

// const QuizInfos = ({ place }) => {
//     return (
//         <div className="quiz-infos-container">
//             <span id="quiz-infos-find">
//                 <h2 id="quiz-find">{place}</h2>
//                 <img alt="find" src={require('../../../assets/images/flags/continents/europe/Countries/France.png')} />
//             </span>
//             <div className="quiz-infos-score">
//                 <p>0/50</p>
//                 <p>2:00</p>
//                 <p>+2100</p>
//             </div>
//         </div>
//     )
// }

export default QuizInfos;