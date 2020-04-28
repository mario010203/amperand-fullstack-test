import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* --- Components --- */
import { HomePage } from "./pages/home";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>
);
