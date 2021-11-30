import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AccountRoutes from './account/AccountRoutes';
import TemplatesRoutes from './templates/TemplatesRoutes';

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
        {
          path: '/settings/members',
          component: lazy(() => import('../../apps/talent/members/Members')),
        },
        {
          path: '/settings/boards',
          component: lazy(() => import('../../apps/talent/boards/Boards')),
        },
        ...AccountRoutes,
      ],
    },
  ],
};

export default SettingsConfig;
