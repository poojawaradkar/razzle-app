import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "counter" */ './Counter'), {
    fallback: <div>Loading...</div>,
  }),
  fetchInitialData: store => {
    // console.log(store);
    const { incrementAtRandom } = store.getActions().counter;
    return incrementAtRandom();
  },
};
