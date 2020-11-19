import React from 'react';
import "./btn.css";

export default function LinkButton({ colour, size, text }) {
    const bgCol = colour === "blue" ? "#17BBFF" : colour === "green" ? "#98E575" : "#A4A4A4";
    const boxCol = colour === "blue" ? "#19AAE5" : colour === "green" ? "#88CC69" : "#797979"
    const styles = {
        backgroundColor: bgCol,
        boxShadow: `0 5px 0px ${boxCol}`,
        color: "white",
    }
    
    return (
        <button className="selectable linkButton" style={styles} data-col={colour}>{text}</button>
    )
}