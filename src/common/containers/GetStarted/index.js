import React from 'react';
import loadable from '@loadable/component';

export default {
  component: loadable(() => import(/* webpackChunkName: "getStarted" */ './GetStarted'), {
    fallback: <div>Loading...</div>,
  }),
};
