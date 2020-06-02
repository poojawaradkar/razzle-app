import Home from './components/Home';
import About from './components/About';
import Counter from './containers/Counter';
import Grid from './containers/Grid';
import GetStarted from './containers/GetStarted';
import NotFound from './components/NotFound';

const routes = [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...GetStarted,
    path: '/get-started',
  },
  {
    ...About,
    path: '/login',
  },
  {
    ...Counter,
    path: '/counter',
  },
  {
    ...Grid,
    path: '/popular/:id',
  },
  {
    ...About,
    path: '/about',
  },
  {
    component: NotFound,
  },
];

export default routes;
