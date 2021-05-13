import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/Utils/AppliedRoute";

//Pages
import Home from "./pages/Home";
import GameSetup from "./components/Game/GameSetup";
import Contents from "./components/Contents/Contents";

export default ({ childProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
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
      {/* <AppliedRoute
        path="/learn/:continent/:learn"
        component={Learn1}
        props={childProps}
      /> */}
    </Switch>
  );
};
