import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';

const store = configureStore(window.__PRELOADED_STATE__);

// Load all components needed before rendering

loadableReady().then(() => {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
});

// if (module.hot) {
//   module.hot.accept("../common/containers/App", () => {
//     hydrate(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//       document.getElementById("root")
//     );
//   });
// }
if (module.hot) {
  module.hot.accept();
}
