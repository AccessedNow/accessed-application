import { lazy } from 'react';

const CompanyPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/company/:id',
      component: lazy(() => import('./CompanyPage')),
    },
  ],
};

export default CompanyPageConfig;
