import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { StoreProvider } from 'easy-peasy';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state);
console.log(store.getState());
// Load all components needed before rendering

loadableReady().then(() => {
  hydrate(
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
  );
});

if (module.hot) {
  module.hot.accept();
}
