import { lazy } from 'react';

const MyNetworkConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/mynetwork/connections',
      component: lazy(() => import('./connections/Connections')),
    },
    {
      path: '/mynetwork/followings',
      component: lazy(() => import('./followings/Followings')),
    },
    {
      path: '/mynetwork',
      component: lazy(() => import('./MyNetwork')),
    },


  ],
};

export default MyNetworkConfig;
