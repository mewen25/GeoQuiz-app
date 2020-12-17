import React from 'react';
import "./buttonStyle.scss";

export default function SimpleButton({ name, colour="#5DBCFB", block=false, onClick }) {
    return (
        <button onClick={onClick} style={{ backgroundColor: colour, width: block ? "100%" : 'auto', height: block ? "100%" : 'auto' }} className="simple-button">{name}</button>
    )
}