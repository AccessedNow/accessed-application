import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AccountRoutes from './account/AccountRoutes';

const SettingsConfig = {
  routes: [
    {
      path: '/settings',
      component: lazy(() => import('./SettingsLayout')),
      routes: [
        {
          path: '/settings/changelog',
          component: lazy(() => import('./changelog/ChangelogDoc')),
        },
        ...AccountRoutes,
      ],
    },
  ],
};

export default SettingsConfig;
