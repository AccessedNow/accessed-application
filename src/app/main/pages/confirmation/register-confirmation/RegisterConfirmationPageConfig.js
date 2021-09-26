import { lazy } from 'react';

const RegisterConfirmationPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/registration/confirmation',
      component: lazy(() => import('./RegisterConfirmationPage')),
    },
  ],
};

export default RegisterConfirmationPageConfig;
