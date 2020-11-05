import React from "react";
import { Button } from "react-bootstrap";

const ShowMeBtn = ({ handleClick }) => {
  return (
    <div className="showme-btn" onClick={handleClick}>
      <h3 style={{ margin: 0, padding: "5px 0" }}>Reveal</h3>
    </div>
  );
};

export default ShowMeBtn;
