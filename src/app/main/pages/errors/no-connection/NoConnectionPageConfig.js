import { lazy } from 'react';

const NoConnectionPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/errors/connection',
      component: lazy(() => import('./NoConnectionPage')),
    },
  ],
};

export default NoConnectionPageConfig;
