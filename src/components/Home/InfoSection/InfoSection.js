import React from 'react';
import "./InfoSection.css";

export default function InfoSection({ text, image }) {
    
    return (
      <div className="info-section" data-underline={text.underline}>
        <div className="info-section-title" data-image={image.src ? "true" : "false"} data-image-direction={image.direction||"right"}>
            <h1>{text.title}</h1>
            {image.src && <img style={image.style && image.style} src={image.src} alt={image.name} />}
        </div>
        <div className="info-section-description">
            { text.handled ? text.description : <p>{text.description}</p> }
        </div>
      </div>
    )
}