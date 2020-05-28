import { Provider } from 'react-redux';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import path from 'path';
import fetchCounter from '../common/api/counter';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchCounter(apiResult => {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query);
      const counter = parseInt(params.counter, 10) || apiResult || 0;

      // Compile an initial state
      const preloadedState = { counter };

      // Create a new Redux store instance
      const store = configureStore(preloadedState);
      const context = {};
      const extractor = new ChunkExtractor({
        statsFile: path.resolve('build/loadable-stats.json'),
        // razzle client bundle entrypoint is client.js
        entrypoints: ['client'],
      });
      // Render the component to a string
      const markup = renderToString(
        <ChunkExtractorManager extractor={extractor}>
          <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        </ChunkExtractorManager>
      );

      // collect script tags
      const scriptTags = extractor.getScriptTags();

      // collect "preload/prefetch" links
      const linkTags = extractor.getLinkTags();

      // collect style tags
      const styleTags = extractor.getStyleTags();

      // Grab the initial state from our Redux store
      const finalState = store.getState();

      res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle Redux Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${linkTags}
        ${styleTags}

    </head>
    <body>
        <div id="root">${markup}</div>
        ${scriptTags}
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);
    });
  });

export default server;
