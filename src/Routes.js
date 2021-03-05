import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/Utils/AppliedRoute";

//Pages
// import Home from "./pages/Home/Home";
import Home1 from "./pages/Home/Home1";
import Home2 from "./cleanup/Home";
import Game from "./pages/Game/Game";
import GameSetup from "./components/Game/GameSetup";
import Learn from "./pages/Learn/Learn";
import Learn1 from "./components/Learn/Learn";
import Contents from "./components/Contents/Contents";

export default ({ childProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home1} props={childProps} />
      <AppliedRoute
        path="/:contents"
        exact
        component={Contents}
        props={childProps}
      />
      <AppliedRoute
        path="/quiz/:continent"
        exact
        component={GameSetup}
        props={childProps}
      />
      <AppliedRoute
        path="/quiz/:continent/:quiz"
        component={GameSetup}
        props={childProps}
      />
      <AppliedRoute
        path="/learn/:continent/:learn"
        component={Learn1}
        props={childProps}
      />
    </Switch>
  );
};
