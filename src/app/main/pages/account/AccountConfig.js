import { lazy } from 'react';

const AccountConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ['/account/settings', '/account/settings/general'],
      component: lazy(() => import('./General')),
    },
    {
      path: '/account/settings/security',
      component: lazy(() => import('./Security')),
    },
    {
      path: '/account/settings/notifications',
      component: lazy(() => import('./Notifications')),
    },
    {
      path: '/account/settings/billing',
      component: lazy(() => import('./Billing')),
    },
  ],
};

export default AccountConfig;
