import { lazy } from 'react';

const RegisterConfirmationPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/maintenance',
      component: lazy(() => import('./MaintenancePage')),
    },
  ],
};

export default RegisterConfirmationPageConfig;
