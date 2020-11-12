import React from 'react';

import "./Card.css";

export default function Card({ info }) {
    return (
        <div className="mode-card">
            <div className="card-top">
                <h2 className="card-top-title">{info.title}</h2>
                <p className="card-top-description">{info.description}</p>
                {info.subTextHandled === true ? info.subText : <h4 className="card-top-subText">{info.subText}</h4>}
            </div>
            {info.image.src && <div className="card-bottom">
                <img src={info.image.src} alt={info.image.name} />
            </div>}
        </div>
    )
}