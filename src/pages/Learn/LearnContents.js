import React from 'react';
import LearnContentsCountry from "./LearnContentsCountry";

const LearnContents = (props) => {
    return (
        <div className="learn-contents">
            <div className="learn-contents-title">
                <h3>Countries</h3>
            </div>
            <div className="learn-contents-countries">
                {props.countries.map(c => (
                    <LearnContentsCountry isSelected={props.learn === c ? true : false} text={c} handleClick={props.handleClick} />
                ))}
            </div>
        </div>
    )
}

export default LearnContents;