import { lazy } from 'react';

const AccountcRoutes = [
  {
    path: '/settings/account/profile',
    component: lazy(() => import('./profile/Profile')),
  },
  {
    path: '/settings/account/notifications',
    component: lazy(() => import('./notifications/Notifications')),
  },
  {
    path: '/settings/account/security',
    component: lazy(() => import('./security/Security')),
  },
  {
    path: '/settings/account/billing',
    component: lazy(() => import('./billing/Billing')),
  },
];

export default AccountcRoutes;
