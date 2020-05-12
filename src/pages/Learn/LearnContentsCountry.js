import React from 'react';

const LearnContentsCountry = props => (
    <div className="learn-contents-country" onClick={props.handleClick}>
        <div className="learn-contents-highlight" style={props.hasSelected ? {backgroundColor: "#f4b57e"} : null} ></div>
        <p id={props.text} className="learn-contents-country">{props.text}</p>
    </div>
)

export default LearnContentsCountry;