import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import "./ContinentLinks.css";

const ContinentLinks = ({ linkTitle, title, data }) => {
    console.log("DATA", data);

    const quizLinks = [data?.quiz?.map(link => <LinkContainer to={`/quiz/${linkTitle}/${link.link}`}><p className="continentLink" quiztype="quiz">{link.name} Quiz</p></LinkContainer>)]
    const learnLinks = [data?.learn?.map(link => <LinkContainer to={`/quiz/${linkTitle}/${link.link}`}><p className="continentLink" quiztype="learn">Learn {link.name}</p></LinkContainer>)]

    return (
        <div className="continent-links">
            <h2 className="continent-link-title">{title}</h2>
            <div className="continent-links-container">
                {quizLinks}
                {learnLinks}
            </div>
        </div>
    )
}

export default ContinentLinks;