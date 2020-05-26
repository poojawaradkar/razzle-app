import React from "react";
import { Route, Switch } from "react-router-dom";

import loadable from "@loadable/component";
import "./App.css";

const Counter = loadable(() => import("../components/Counter"));
const About = loadable(() => import("../components/About"));

const App = () => (
  <Switch>
    <Route exact path="/" component={Counter} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default App;
