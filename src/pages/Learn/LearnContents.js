import React from 'react';
import LearnContentsCountry from "./LearnContentsCountry";

const LearnContents = (props) => {
    return (
        <div className="learn-contents">
            <div className="learn-contents-title">
            <h3 id="learn-contents-title1">Countries</h3>
            <h3 id="learn-contents-title2">{`${props.searched.length}/${props.countries.length}`}</h3>
            </div>
            <div className="learn-contents-countries">
                {props.countries.map(c => (
                    <LearnContentsCountry hasSelected={props.searched.includes(c)} isSelected={props.learn === c ? true : false} text={c} handleClick={props.handleClick} />
                ))}
            </div>
        </div>
    )
}

export default LearnContents;