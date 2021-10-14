import { lazy } from 'react';

const HelpCenterConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/help-center',
      component: lazy(() => import('./HelpCenter')),
    },
  ],
};

export default HelpCenterConfig;
