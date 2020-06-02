import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';
import RouteLoader from '../RouteLoader';
import './App.scss';

const App = () => (
  <>
    <RouteLoader>{renderRoutes(Routes)}</RouteLoader>
  </>
);

export default App;
