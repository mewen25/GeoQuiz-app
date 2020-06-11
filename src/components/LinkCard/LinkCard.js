import React from "react";

import "./LinkCard.css";

function LinkCard( { theme, img }) {
  
  const themes = {
    red: {
        cardBackground: "#FFEEF0",
        cardShadow: "#CE9FA2",
        buttonBg: "#D25454",
        descriptionColour: "#545454"
    },
    green: {
        cardBackground: "#F2FAF5",
        cardShadow: "#98C1A8",
        buttonBg: "#4E9E69",
        descriptionColour: "#545454"
    },
    blue: {
        cardBackground: "#F8F7FB",
        cardShadow: "#B0A7CD",
        buttonBg: "#312F9D",
        descriptionColour: "#000000"
    }
  }

  const colour = themes[theme];

  return (
    <div className="link-card" style={{ 
        backgroundColor: colour.cardBackground,
        boxShadow: `0px 8px 3px ${colour.cardShadow}`,
    }}>
      <img alt="link" src={img} />
      <p syle={{ color: colour.descriptionColour }} >Description for the link</p>
      <h2 className="link-card-btn" style={{ background: colour.buttonBg }}>Europe Quiz</h2>
    </div>
  );
}

export default LinkCard;
