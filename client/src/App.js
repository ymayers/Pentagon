import React from "react";
import Welcome from "./components/Welcome";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
}

export default App;
