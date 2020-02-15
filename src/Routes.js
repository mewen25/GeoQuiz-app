import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";

//Pages
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/game/:continent" component={Game} props={childProps} />
  </Switch>
);
