import React from 'react';

export default ({ place }) => (
    <div className="quiz-infos-find">
        <h2>find <span id="find-place">{place?.name}</span></h2>
        <img className="find-flag" src={place?.image} alt={place?.name} />
    </div>
)