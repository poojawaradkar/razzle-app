import Home from './components/Home';
import About from './components/About';
import Counter from './containers/Counter';
// import Grid from './pages/Grid';
import NotFound from './components/NotFound';

const routes = [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...Counter,
    path: '/counter',
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
