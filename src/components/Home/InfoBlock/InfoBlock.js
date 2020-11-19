import React from 'react';

import "./InfoBlock.css";

export default function InfoBlock({ img, content, imgDirection="left" }) {
    return(
        <div className="scroll-info-block" style={{flexDirection: imgDirection === "left" ? "row" : "row-reverse"}}>
            <div className="info-block-img">
                <img src={img.src} alt={img.name} />
            </div>
            <div className="info-block-content">
                {content}
            </div>
        </div>
    )
}