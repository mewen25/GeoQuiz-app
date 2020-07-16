import React from 'react';
import "./QuizInfos.css"

const QuizInfos = ({ place }) => {
    return (
        <div className="quiz-infos-container">
            <span id="quiz-infos-find">
                <h2 id="quiz-find">{place}</h2>
                <img alt="find" src={require('../../../assets/images/flags/continents/europe/Countries/France.png')} />
            </span>
            <div className="quiz-infos-score">
                <p>0/50</p>
                <p>2:00</p>
                <p>+2100</p>
            </div>
        </div>
    )
}

export default QuizInfos;