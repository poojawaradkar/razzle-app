import React from "react";
import { Route, Switch } from "react-router-dom";

import loadable from "@loadable/component";
import "./App.css";
import styles from "./app.module.css";

const Counter = loadable(() => import("../components/Counter"));
const About = loadable(() => import("../components/About"));

const App = () => {
  const a = 'afrgvb';
    const a = '5';
  return (
    <>
      <div className={styles.hello}>Welcome to Razzle.</div>
          <p>jdfhskjd</p>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default App;
