import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";

//Pages
// import Home from "./pages/Home/Home";
import Home1 from "./pages/Home/Home1";
import Game from "./pages/Game/Game";
import GameSetup from "./components/Game/GameSetup";
import Learn from "./pages/Learn/Learn";

export default ({ childProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home1} props={childProps} />
      <AppliedRoute
        path="/quiz/:continent/:quiz"
        component={GameSetup}
        props={childProps}
      />
      <AppliedRoute
        path="/learn/:continent/:learn"
        component={Learn}
        props={childProps}
      />
    </Switch>
  );
};
