import React from 'react';

const LearnContentsCountry = props => (
    <div className="learn-contents-country" onClick={props.handleClick}>
        <div className="learn-contents-highlight"></div>
        <p className="learn-contents-country">{props.text}</p>
    </div>
)

export default LearnContentsCountry;