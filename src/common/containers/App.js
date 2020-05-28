import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import RouteLoader from '../RouteLoader';
import Navbar from '../components/Navbar';
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
    <Navbar />
    <RouteLoader>{renderRoutes(Routes)}</RouteLoader>
  </>
);

export default App;
