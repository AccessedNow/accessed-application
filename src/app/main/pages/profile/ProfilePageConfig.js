import { lazy } from 'react';

const ProfilePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/profile',
      component: lazy(() => import('./ProfilePage')),
    },
    {
      path: '/user/:username/recent-activity',
      component: lazy(() => import('./recent-activity/RecentActivity')),
    },
    {
      path: '/user/:username',
      component: lazy(() => import('./profile-detail/ProfileDetail')),
    },

  ],
};

export default ProfilePageConfig;
