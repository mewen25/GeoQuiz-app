import React from 'react';

import QuizFind from "./QuizFind";
import QuizSideInfo from "./QuizSideInfo";
import "./QuizInfos.css";

const QuizInfos = ({ data, infoName }) => {
    return (
        <div className={infoName||"quiz-infos-container"}>
            {data && data.type === "top" ? <QuizFind find={data.place} /> :
                data && data.type === "side" ? <QuizSideInfo marks={data.marks} total={data.total} score={data.score} time={data.time} /> : null}
        </div>
    )
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