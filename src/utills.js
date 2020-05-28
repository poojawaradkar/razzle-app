import { useEffect, useRef } from 'react';
import { matchRoutes } from 'react-router-config';
import createStore from './common/store/configureStore';
import Routes from './common/Routes';

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const getMatchedRoutes = path => {
  const routes = matchRoutes(Routes, path);
  return routes;
};

const loadRouteData = (path, options = {}) => {
  const store = createStore();
  const routes = getMatchedRoutes(path);
  if (!routes.length) {
    if (__isBrowser__) {
      //
    } else {
      return Promise.resolve({
        notFound: true,
      });
    }
  }
  const matchedRoute = routes[0].route;

  const promises = routes
    .map(({ route }) => {
      const promiseArr = [];

      if (!options.loadType || options.loadType === 'fetchInitialData') {
        promiseArr.push(route.fetchInitialData ? route.fetchInitialData(store, options.id) : null);
      }

      if (route.component.load) {
        promiseArr.push(route.component.load());
      }
      return Promise.all(promiseArr);
    })
    .map(promise => {
      if (!promise) {
        return null;
      }
      return new Promise(resolve => {
        const resolveCb = data => {
          resolve({
            ...data,
            routeData: matchedRoute,
          });
        };
        promise.then(resolveCb).catch(resolveCb);
      });
    });
  return Promise.all(promises);
};

export { usePrevious, getMatchedRoutes, loadRouteData };
