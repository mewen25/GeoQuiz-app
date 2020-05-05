import React from 'react';

function LearnSelected(props) {
    return (
        <div className="learn-page-selected">
            <div className="learn-selected-country">
                <p>{props.data.place}</p>
                <img src={props.data.img} alt={`${props.data.place}-flag`} />
            </div>
            <div className="learn-selected-capital">
                <p>Capital city: {props.data.capital}</p>
            </div>
            <div className="learn-selected-extras">
                {/* {props.extras} */}
            </div>
        </div>
    )
}

export default LearnSelected;