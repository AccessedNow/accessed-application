import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const TalentConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/talent/company/:companyId/jobs/create',
      component: lazy(() => import('./job-create/JobCreate')),
    },
  ],
};

export default TalentConfig;
