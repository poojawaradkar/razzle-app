import { createStore } from 'easy-peasy';
import models from '../models';

let store = null;

const configureStore = (preloadedState = {}) => {
  store = createStore(models, {
    initialState: preloadedState,
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for models
    module.hot.accept('../models', () => {
      const nextRootModels = require('../models').default;
      store.reconfigure(nextRootModels);
    });
  }

  return store;
};
export default configureStore;

export const getStore = () => store;
