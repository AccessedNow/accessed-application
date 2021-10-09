import { lazy } from 'react';

const CompanyConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/company/register',
      component: lazy(() => import('./CompanyRegistration/CompanyRegistration')),
    },
    {
      path: '/company/:id',
      component: lazy(() => import('./CompanyDetail/CompanyDetail')),
    },

  ],
};

export default CompanyConfig;
