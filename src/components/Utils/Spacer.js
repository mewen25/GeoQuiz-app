import React from 'react';

export default function Spacer({ img }) {
    const styles = {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        height: "25rem",
        // backgroundColor: "lime"
    }
    return (
        <div className="spacer" style={styles}>
            <img style={{height: "50%", marginTop: "50px"}} src={img.src} alt={img.name} />
        </div>
    )
}