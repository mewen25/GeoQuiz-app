import React from 'react';
import QuizButtons from "./QuizButtons";


export default ({ place, handleSkip, handleShow }) => (
    <div className="quiz-infos-find">
        <span style={{display: "flex"}}>    
            <h2>find <span id="find-place">{place?.name}</span></h2>
            <img className="find-flag" src={place?.image} alt={place?.name} />
        </span>
        <span style={{marginTop: "15px", width: "100%"}}>
            <QuizButtons handleSkip={handleSkip} handleShow={handleShow} />
        </span>
    </div>
)