import React, { useState } from 'react';
import LineTo from "react-lineto";

export default function SmallsPanel({ smalls }) {
    const [hovered, setHovered] = useState(null);
    return (
        <div className="small-place-panel">
            {/* <h2>{hovered}</h2> */}
            {smalls.map(s => <div className={`small-place-btn sb-${s.id || s.name}`} onMouseOver={() => setHovered(s.id||s.name)} onMouseLeave={() => setHovered(null)}>{s.name.slice(0,3)}</div>)}
            {hovered && <LineTo className="quiz-line" from={`sb-${hovered}`} to={`qc-${hovered}`} borderStyle="dashed" borderColor="#000" borderWidth={3} />}
        </div>
    )
}
