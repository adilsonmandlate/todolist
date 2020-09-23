import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Home} />
        <Route
          path="/todos/new"
          render={() => <div>Render todos form here!</div>}
        />
        <Route
          path="/categories/new"
          render={() => <div>Render categories form here!</div>}
        />
        <Route render={() => <div>Not found.</div>} />
      </Switch>
    </div>
  );
}

export default App;
