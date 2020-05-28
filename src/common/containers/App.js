import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import './App.css';
import styles from './app.module.css';


const App = () => (
  <>
    <div className={styles.hello}>Welcome to Razzle.</div>
    <p>
      <Link to="/about">About us</Link>
    </p>
    <p>
      <Link to="/counter">Counter</Link>
    </p>
    <p>
      <Link to="/notfound">No match</Link>
    </p>
    <div>{renderRoutes(Routes)}</div>
  </>
);

export default App;
