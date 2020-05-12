import React from 'react';

const LearnContentsCountry = props => (
    <div className="learn-contents-country" onClick={props.handleClick}>
        <div className="learn-contents-highlight"></div>
        <p style={props.isSelected ? {backgroundColor: "#E1E1E1", padding: "3px"} : null} id={props.text} className="learn-contents-country">{props.text}</p>
    </div>
)

export default LearnContentsCountry;