import React from 'react';

import LinkCard from "../LinkCard/LinkCard";

import "./QuickLinks.css";

const QuickLinks = () => {
    return (
        <div className="quick-links">
            <h2 id="quick-links-title">Give these quizzes a go</h2>
            <div className="quick-links-container">
                <LinkCard theme="red" img={require("../../assets/images/card-links/usa.svg")} />
                <LinkCard theme="green" img={require("../../assets/images/card-links/south-america.svg")} />
                <LinkCard theme="blue" img={require("../../assets/images/card-links/europe.svg")} />
                <LinkCard theme="red" img={require("../../assets/images/card-links/asia.svg")} />
                <LinkCard theme="green" img={require("../../assets/images/card-links/africa.svg")} />
                <LinkCard theme="blue" img={require("../../assets/images/card-links/oceania.svg")} />
                <LinkCard theme="red" img={require("../../assets/images/card-links/north-america.svg")} />
            </div>
        </div>
    )
}

export default QuickLinks;