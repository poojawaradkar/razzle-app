import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import serialize from 'serialize-javascript';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import App from '../common/containers/App';

export default options => {
  const {
    req, store, context
  } = options;

  const extractor = new ChunkExtractor({
    statsFile: path.resolve('build/loadable-stats.json'),
    // razzle client bundle entrypoint is client.js
    entrypoints: ['client'],
  });

  // Render the component to a string
  const markup = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StoreProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </StoreProvider>
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
  return (`<!doctype html>
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
};
