import React from "react";
import ThemeButton from "../Button/ThemeButton";

import "./gameUtil.css";

export default ({ setTheme, theme, themeColour }) => {
  const btnColours = {
    blue: "#285979",
    green: "#3E7D53",
    yellow: "#F5E158",
    red: "#F55858",
  };

  const handleSwitch = (e) => {
    const name = e.target.id;
    if (!name || name === theme) return;
    setTheme(name);
  };

  return (
    <div className="theme-switch">
      <ThemeButton
        col={"blue"}
        colour={btnColours["blue"]}
        btnPress={handleSwitch}
        disabled={theme === "blue"}
      />
      <ThemeButton
        col={"green"}
        colour={btnColours["green"]}
        btnPress={handleSwitch}
        disabled={theme === "green"}
      />
      <ThemeButton
        col={"yellow"}
        colour={btnColours["yellow"]}
        btnPress={handleSwitch}
        disabled={theme === "yellow"}
      />
      <ThemeButton
        col={"red"}
        colour={btnColours["red"]}
        btnPress={handleSwitch}
        disabled={theme === "red"}
      />
    </div>
  );
};
