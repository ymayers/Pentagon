import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";



function App() {
  return (
    <>
      <Switch>

        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

        <Route path="/login">
          <LogIn/>
        </Route>

      </Switch>
    </>
  );
}

export default App;
