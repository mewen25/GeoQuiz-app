import React from "react";
import "./App.css";
import "./styles/global.scss";
import Routes from "./Routes";
import Header from "./components/Utils/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import Home from "./pages/Home/Home";

function App() {
  const childProps = { define: undefined };

  return (
    <div className="App">
      <Header />
      <Routes childProps={childProps} />
    </div>
  );
}

export default App;
