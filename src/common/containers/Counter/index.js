import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "counter" */ './Counter'), {
    fallback: <div>Loading...</div>,
  }),
};
