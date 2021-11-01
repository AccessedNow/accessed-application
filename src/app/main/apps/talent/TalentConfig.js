import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const TalentConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: [ '/talent/company/:companyId/jobs/addUpdate/:jobId', '/talent/company/:companyId/jobs/addUpdate'],
      component: lazy(() => import('./job-create/JobCreate')),
    },
  ],
};

export default TalentConfig;
