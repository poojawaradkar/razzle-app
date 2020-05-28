import { createStore } from 'easy-peasy';
import reducers from '../reducers';

const configureStore = (preloadedState = {}) => {
  const store = createStore(reducers, {
    initialState: preloadedState,
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      // store.replaceReducer(nextRootReducer);
      store.reconfigure(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
