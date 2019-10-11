import { lazy } from 'react';

const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/terms-conditions',
      component: lazy(() => import('./index')),
    },
  ],
};

export default HomeConfig;
