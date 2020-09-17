import React from "react";
import { useHistory } from "react-router-dom";

import "./LinkCard.css";

function LinkCard( { theme, img, title, link }) {
  const history = useHistory();
  
  const themes = {
    red: {
        cardBackground: "#F4F4F4",
        cardShadow: "#CE9FA2",
        buttonBg: "#D25454",
        descriptionColour: "#545454"
    },
    green: {
        cardBackground: "#F4F4F4",
        cardShadow: "#98C1A8",
        buttonBg: "#4E9E69",
        descriptionColour: "#545454"
    },
    blue: {
        cardBackground: "#F4F4F4",
        cardShadow: "#B0A7CD",
        buttonBg: "#312F9D",
        descriptionColour: "#000000"
    }
  }

  const colour = themes[theme];

  return (
    <div className="link-card" onClick={() => history.push(link)}>
      <img alt="link" src={img} />
      <p syle={{ color: colour.descriptionColour }} >Description for the link</p>
      <h2 className="link-card-btn" style={{ background: colour.buttonBg }}>{title}</h2>
    </div>
  );
}

export default LinkCard;
