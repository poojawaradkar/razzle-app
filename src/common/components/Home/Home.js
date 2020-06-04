import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './home.scss';

const Home = () => (
  <>
    <div className="hello">
      Welcome to Razzle.
    </div>
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
  </>
);

export default Home;
