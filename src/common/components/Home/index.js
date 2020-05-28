import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "home" */ './Home'), {
    fallback: <div>Loading...</div>,
  }),
};
