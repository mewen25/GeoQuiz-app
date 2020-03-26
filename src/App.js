import React from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
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
