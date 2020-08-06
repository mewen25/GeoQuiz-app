import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GameContextProvider } from "./components/Utils/gameContext";
import { ModeContextProvider } from "./components/Utils/modeContext";
import "./index.css";
import App from "./App";
import Game from "./pages/Game/Game";

ReactDOM.render(
  <GameContextProvider>
    <ModeContextProvider>
      <Router>
        <App />
      </Router>
    </ModeContextProvider>
  </GameContextProvider>,
  document.getElementById("root")
);
