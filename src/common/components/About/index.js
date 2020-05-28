import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "about" */ './About'), {
    fallback: <div>Loading...</div>,
  }),
};
