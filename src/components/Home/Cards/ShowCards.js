import React from 'react';

import Card from "./Card";

export default function ShowCards({ cards }) {
    return (
        <div className="cards-show">
            {cards.map(c => (
                <Card info={c} />
            ))}
        </div>
    )
}