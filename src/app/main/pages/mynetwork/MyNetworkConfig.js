import { lazy } from 'react';

const MyNetworkConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/mynetwork',
      component: lazy(() => import('./MyNetwork')),
    }

  ],
};

export default MyNetworkConfig;
