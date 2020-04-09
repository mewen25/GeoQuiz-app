import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";

//Pages
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Learn from "./pages/Learn/Learn";

export default ({ childProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute
        path="/quiz/:continent/:quiz"
        component={Game}
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
