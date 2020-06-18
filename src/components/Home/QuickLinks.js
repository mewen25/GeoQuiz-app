import React from 'react';

import LinkCard from "../LinkCard/LinkCard";

import "./QuickLinks.css";

const QuickLinks = () => {
    return (
        <div className="quick-links">
            <h2 id="quick-links-title">Give these quizzes a go</h2>
            <div className="quick-links-container">
                <LinkCard theme="red" img={require("../../assets/images/card-links/usa.svg")} title="USA States" link="/quiz/north-america/states" />
                <LinkCard theme="green" img={require("../../assets/images/card-links/south-america.svg")} title="South America Countries" link="/quiz/south-america/countries" />
                <LinkCard theme="blue" img={require("../../assets/images/card-links/europe.svg")} title="Europe Countries" link="/quiz/europe/countries" />
                <LinkCard theme="red" img={require("../../assets/images/card-links/asia.svg")} title="Asia Countries" link="/quiz/asia/countries" />
                <LinkCard theme="green" img={require("../../assets/images/card-links/africa.svg")} title="Africa Countries" link="/quiz/africa/countries" />
                <LinkCard theme="blue" img={require("../../assets/images/card-links/oceania.svg")} title="Oceania Countries" link="/quiz/oceania/countries" />
                <LinkCard theme="red" img={require("../../assets/images/card-links/north-america.svg")} title="North America Countries" link="/quiz/north-america/countries" />
            </div>
        </div>
    )
}

export default QuickLinks;