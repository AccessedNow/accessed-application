import React from 'react';
import { Redirect } from 'react-router-dom';

import CompanyRoutes from './company/CompanyRoutes';


const SettingsConfig = {
	routes: [
		{
			path: '/talent/settings',
			component: React.lazy(() => import('./SettingsLayout')),
			routes: [
				{
					path: '/talent/settings/changelog',
					component: React.lazy(() => import('./changelog/ChangelogDoc'))
				},
        {
          path: '/talent/settings/my-account',
          component: React.lazy(() => import('./my-account/Profile'))
        },
        {
          path: '/talent/settings/user-management',
          component: React.lazy(() => import('./user-management/UserManagement'))
        },
        {
          path: '/talent/settings/labels',
          component: React.lazy(() => import('./labels/Labels'))
        },
        ...CompanyRoutes,
				{
					path: '/talent/settings',
					component: () => <Redirect to="./settings/my-account/profile" />
				}

			]
		}
	]
};

export default SettingsConfig;
