import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const TalentConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/talent/company/:courseId/jobs/create/:courseHandle',
      component: lazy(() => import('./job-create/JobCreate')),
    },
  ],
};

export default TalentConfig;
