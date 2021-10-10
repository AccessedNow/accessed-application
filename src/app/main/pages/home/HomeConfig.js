import { lazy } from 'react';

const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/home',
      component: lazy(() => import('./index')),
    },
  ],
};

export default HomeConfig;
