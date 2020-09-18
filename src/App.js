import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" render={() => <div>Render main page here!</div>} />
        <Route
          path="/todos/new"
          render={() => <div>Render todos form here!</div>}
        />
        <Route
          path="/categories/new"
          render={() => <div>Render categories form here!</div>}
        />
      </Switch>
    </div>
  );
}

export default App;
