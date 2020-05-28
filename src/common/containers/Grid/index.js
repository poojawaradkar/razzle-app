import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "grid" */ './Grid'), {
    fallback: <div>Loading...</div>,
  }),
  fetchInitialData: (store, language) => {
    // console.log(store);
    const fetchData = store.getActions().articles.fetchPopularRepos;
    return fetchData(language);
  },
};
