import React, { useState, useEffect } from "react";

export default function ToggleSwitch(props) {
  const [toggle, setToggle] = useState(null);
  const handleToggle = () => {
    setToggle(!toggle);
    props.setMode();
  };
  useEffect(() => {
    setToggle(props.mode === "quiz" ? false : true);
  }, [props.mode]);

  return (
    <div
      id="theme-switch"
      onClick={handleToggle}
      style={
        toggle ? { backgroundColor: "#ff8f50" } : { backgroundColor: "#173b5b" }
      }
    >
      <div
        id="theme-switch-circle"
        style={toggle ? { transform: `translateX(${80}px)` } : null}
      />
    </div>
  );
}
